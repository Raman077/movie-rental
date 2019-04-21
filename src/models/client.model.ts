import {Entity, property, model, hasMany} from '@loopback/repository';
import {Rent} from './rent.model';

@model({name: 'client'})
export class Client extends Entity {
    @property({
        type: 'number',
        id: true,
    })
    id: number;

    @property({
        type: 'string',
        required: true,
    })
    name: string;

    @property({
        type: 'string',
        required: true,
    })
    email: string;

    @property({
        type: 'string',
        required: true,
    })
    pass: string;

    @property({
        type: 'date',
        default: () => new Date(),
    })
    createdAt?: Date;

    @hasMany(() => Rent, {keyTo:'rentId'})
    rents: Rent[];

    getId() {
        return this.id;
    }

    constructor(data?: Partial<Client>) {
        super(data);
    }
}
