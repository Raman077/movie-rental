import {Entity, property, model, belongsTo} from '@loopback/repository';
import {Client} from './client.model';
import {MovieCopy} from './movie-copy.model';

@model({name: 'rent'})
export class Rent extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id: number;

    @property({
        type: 'string'
    })
    status: number;

    @property({
        type: 'date',
        default: () => new Date(),
    })
    rentDate?: Date;

    @property({
        type: 'date'
    })
    returnDate?: Date;

    @belongsTo(() => Client)
    clientId: number;

    @belongsTo(() => MovieCopy)
    movieCopyId: number;

    getId() {
        return this.id;
    }

    constructor(data?: Partial<Rent>) {
        super(data);
    }
}
