import {repository} from '@loopback/repository';
import {
    get,
    param,
    post,
    del,
    requestBody,
    RestBindings,
    Response
} from '@loopback/rest';
import {MovieCopy} from '../models';
import {ClientRepository, MovieCopyRepository} from '../repositories';
import {inject} from '@loopback/core';
import {BasicAuthService} from "../services/auth/basic-auth.service";
import {Request} from "express";

export class MovieCopyController {
    constructor(
        @inject('services.BasicAuthService')
        protected basicAuthService: BasicAuthService,
        @repository(MovieCopyRepository)
        protected movieCopyRepository: MovieCopyRepository,
        @repository(ClientRepository) protected clientRepository: ClientRepository,
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @inject(RestBindings.Http.REQUEST) request: Request,
    ) {
        this.basicAuthService.authenticate(response, request, this.clientRepository);
    }

    @get('/movie-copy/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': MovieCopy}}},
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<MovieCopy> {
        return await this.movieCopyRepository.findById(id);
    }

    @del('/movie-copy/{id}', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {schema: {'x-ts-type': MovieCopy}},
                },
            },
        },
    })
    async delete(
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @param.path.number('id') id: number): Promise<void> {
        await this.movieCopyRepository.deleteById(id);
        // @ts-ignore
        return response
            .type('json')
            .status(200)
            .send({message: `Movie copy ${id} deleted successfully.`});
    }

    @get('/movie-copy/by-movie/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': MovieCopy}}},
            },
        },
    })
    async findByMovieId(
        @param.path.number('id') id: number,
    ): Promise<MovieCopy[]> {
        return await this.movieCopyRepository.findByMovie(id);
    }

    @post('/movie-copy', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {schema: {'x-ts-type': MovieCopy}},
                },
            },
        },
    })
    async create(@requestBody() movieCopy: MovieCopy): Promise<MovieCopy> {
        return this.movieCopyRepository.create(movieCopy);
    }
}
