import {Filter, repository} from '@loopback/repository';
import {
    get,
    post,
    put,
    del,
    requestBody,
    getFilterSchemaFor,
    param,
    RestBindings,
    Response
} from '@loopback/rest';
import {inject} from '@loopback/core';

import {Client} from '../models';
import {ClientRepository} from '../repositories';

export class ClientController {
    constructor(@repository(ClientRepository) protected clientRepository: ClientRepository) {}

    @get('/clients', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: {'x-ts-type': Client}},
                    },
                },
            },
        },
    })
    async findClients(@param.query.object('filter', getFilterSchemaFor(Client)) filter?: Filter): Promise<Client[]> {
        return await this.clientRepository.find(filter);
    }

    @get('/client/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': Client}}},
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Client> {
        return await this.clientRepository.findById(id);
    }

    @del('/client/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': Client}}},
            },
        },
    })
    async delete(
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @param.path.number('id') id: number): Promise<void> {
        await this.clientRepository.deleteById(id);
        // @ts-ignore
        return response
            .type('json')
            .status(200)
            .send({message: `Client ${id} deleted successfully.`});
    }

    @post('/client', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {schema: {'x-ts-type': Client}},
                },
            },
        },
    })
    async create(@requestBody() client: Client): Promise<Client> {
        return this.clientRepository.create(client);
    }

    @put('/client/{id}', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {schema: {'x-ts-type': Client}},
                },
            },
        },
    })
    async update(@param.path.number('id') id: number, @requestBody() movie: Client): Promise<Client> {
        await this.clientRepository.updateById(id, movie);
        return this.clientRepository.findById(id);
    }
}
