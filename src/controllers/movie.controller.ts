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
    Response,
    Request
} from '@loopback/rest';
import {inject} from '@loopback/core';

import {Movie} from '../models';
import {MovieRepository} from '../repositories';
import {ClientRepository} from '../repositories';
import {BasicAuthService} from '../services/auth/basic-auth.service';

export class MovieController {
    constructor(
        @inject('services.BasicAuthService')
        protected basicAuthService: BasicAuthService,
        @repository(MovieRepository) protected movieRepository: MovieRepository,
        @repository(ClientRepository) protected clientRepository: ClientRepository,
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @inject(RestBindings.Http.REQUEST) request: Request,
    ) {
        this.basicAuthService.authenticate(response, request, this.clientRepository);
    }

    @get('/movies', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {
                        schema: {type: 'array', items: {'x-ts-type': Movie}},
                    },
                },
            },
        },
    })
    async findMovies(
        @param.query.object('filter', getFilterSchemaFor(Movie)) filter?: Filter,
        @param.query.string('title') title?: string,
    ): Promise<Movie[]> {
        return await this.movieRepository.findSearch(filter, title);
    }

    @get('/movie/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': Movie}}},
            },
        },
    })
    async findById(@param.path.number('id') id: number): Promise<Movie> {
        return await this.movieRepository.findById(id);
    }

    @del('/movie/{id}', {
        responses: {
            '200': {
                description: '',
                content: {'application/json': {schema: {'x-ts-type': Movie}}},
            },
        },
    })
    async delete(
        @inject(RestBindings.Http.RESPONSE) response: Response,
        @param.path.number('id') id: number): Promise<void> {
        await this.movieRepository.deleteById(id);
        // @ts-ignore
        return response
            .type('json')
            .status(200)
            .send({message: `Movie ${id} deleted successfully.`});
    }

    @post('/movie', {
        responses: {
            '200': {
                description: '',
                content: {
                    'application/json': {schema: {'x-ts-type': Movie}},
                },
            },
        },
    })
    async create(@requestBody() movie: Movie): Promise<Movie> {
        return this.movieRepository.create(movie);
    }

    @put('/movie/{id}', {
        responses: {
            '200': {
                description: 'City model instance',
                content: {
                    'application/json': {schema: {'x-ts-type': Movie}},
                },
            },
        },
    })
    async update(@param.path.number('id') id: number, @requestBody() movie: Movie): Promise<Movie> {
        await this.movieRepository.updateById(id, movie);
        return this.movieRepository.findById(id);
    }
}
