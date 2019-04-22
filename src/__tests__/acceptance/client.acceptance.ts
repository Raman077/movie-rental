import {Client} from '@loopback/testlab';
import {ServiceLayerApplication} from '../..';
import {setupApplication} from './test-helper';
const crypto = require('crypto');

describe('Client', () => {
    let app: ServiceLayerApplication;
    let client: Client;

    before('setupApplication', async () => {
        ({app, client} = await setupApplication());
    });

    after(async () => {
        await app.stop();
    });

    it('Should create a new client', async () => {
        let password = crypto.createHash('md5').update('testing').digest('hex');

        await client
            .post('/4all/movie-rental/client')
            .auth('me@rsilveira.dev', 'testing')
            .send(
               {
                    "name": "Rafael Silveira",
                    "email": "me@rsilveira.dev",
                    "pass": password
                }
            )
            .expect(200)
            .expect('Content-Type', 'application/json')
            .expect((res) => {
                res.body.name = "Rafael Silveira";
                res.body.email = "me@rsilveira.dev";
                res.body.password = password;
            })
    });

    it('Should update a client', async () => {
        let password = crypto.createHash('md5').update('testing').digest('hex');

        await client
            .put('/4all/movie-rental/client/1')
            .auth('me@rsilveira.dev', 'testing')
            .send(
                {
                    "name": "Rafael Oliveira",
                    "email": "me@rsilveira.dev",
                    "pass": password
                }
            )
            .expect(200)
            .expect('Content-Type', 'application/json')
            .expect((res) => {
                res.body.name = "Rafael Oliveira";
                res.body.email = "me@rsilveira.dev";
                res.body.password = password;
            })
    });

    it('Should list clients', async () => {
        await client
            .get('/4all/movie-rental/clients')
            .auth('me@rsilveira.dev', 'testing')
            .expect(200)
            .expect('Content-Type', 'application/json')
    });

    it('Client detail', async () => {
        await client
            .get('/4all/movie-rental/client/1')
            .auth('me@rsilveira.dev', 'testing')
            .expect(200)
            .expect('Content-Type', 'application/json')
    });
});
