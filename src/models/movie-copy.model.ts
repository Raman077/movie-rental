import {Entity, property, model, belongsTo} from '@loopback/repository';
import {Movie} from './movie.model';

@model({name: 'movie_copy'})
export class MovieCopy extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id: number;

    @property({
        type: 'string',
        default: 'AVAILABLE'
    })
    status: string;

    @property({
        type: 'date',
        default: () => new Date(),
    })
    createdAt?: Date;

    @belongsTo(() => Movie)
    movieId: number;

    getId() {
        return this.id;
    }

    constructor(data?: Partial<MovieCopy>) {
        super(data);
    }
}
