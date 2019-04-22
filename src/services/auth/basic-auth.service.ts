import {Provider} from '@loopback/core';
import {Response, Request} from '@loopback/rest';
import {ClientRepository} from '../../repositories';

export class BasicAuthService {
    async authenticate(res: Response, req: Request, clientRepository: ClientRepository) {
        // check for basic auth header
        if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
            return res.status(401).json({message: 'Missing Authorization Header'});
        }
        // verify auth credentials
        const base64Credentials =  req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const [email, pass] = credentials.split(':');
        const client = await clientRepository.findOne({"where": {email, pass}});

        if (!client) {
            return res.status(401).json({message: 'Invalid Authentication Credentials'});
        }

       return client;
    }
}

export class BasicAuthServiceProvider implements Provider<BasicAuthService> {
    value(): Promise<BasicAuthService> {
        return new Promise(resolve => {
            resolve(new BasicAuthService());
        });
    }
}
