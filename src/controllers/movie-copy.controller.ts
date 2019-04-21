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
import {MovieCopyRepository} from '../repositories';
import {inject} from '@loopback/core';

export class MovieCopyController {
    constructor(
        @repository(MovieCopyRepository)
        protected movieCopyRepository: MovieCopyRepository,
    ) {}

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
