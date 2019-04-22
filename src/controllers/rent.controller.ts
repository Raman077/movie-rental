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

import {Rent} from '../models';
import {RentRepository} from '../repositories/rent.repository';
import {BasicAuthService} from "../services/auth/basic-auth.service";
import {ClientRepository} from "../repositories";
import {Request} from "express";

export class RentController {
    constructor(
        @inject('services.BasicAuthService')
        protected basicAuthService: BasicAuthService,
        @repository(RentRepository) protected rentRepository: RentRepository,
        @repository(ClientRepository) protected clientRepository: ClientRepository,
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @inject(RestBindings.Http.REQUEST) request: Request,
    ) {
        this.basicAuthService.authenticate(response, request, this.clientRepository);
    }

    @get('/rents', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: {'x-ts-type': Rent}},
                    },
                },
            },
        },
    })
    async findRents(@param.query.object('filter', getFilterSchemaFor(Rent)) filter?: Filter): Promise<Rent[]> {
        return await this.rentRepository.find(filter);
    }

    @get('/rent/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': Rent}}},
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Rent> {
        return await this.rentRepository.findById(id);
    }

    @del('/rent/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': Rent}}},
            },
        },
    })
    async delete(
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @param.path.number('id') id: number): Promise<void> {
        await this.rentRepository.deleteById(id);
        // @ts-ignore
        return response
            .type('json')
            .status(200)
            .send({message: `Rent ${id} deleted successfully.`});
    }

    @post('/rent', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {schema: {'x-ts-type': Rent}},
                },
            },
        },
    })
    async create(@requestBody() rent: Rent): Promise<Rent> {
        return this.rentRepository.create(rent);
    }

    @put('/rent/{id}', {
        responses: {
            '200': {
                description: 'City model instance',
                content: {
                    'application/json': {schema: {'x-ts-type': Rent}},
                },
            },
        },
    })
    async update(@param.path.number('id') id: number, @requestBody() movie: Rent): Promise<Rent> {
        await this.rentRepository.updateById(id, movie);
        return this.rentRepository.findById(id);
    }
}
