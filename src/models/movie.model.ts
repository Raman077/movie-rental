import {Entity, property, model, hasMany} from '@loopback/repository';
import {MovieCopy} from './movie-copy.model';

@model({name: 'movie'})
export class Movie extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  director: string;

  @hasMany(() => MovieCopy, {keyTo:'movieCopyId'})
  copies: MovieCopy[];

  getId() {
    return this.id;
  }

  constructor(data?: Partial<Movie>) {
    super(data);
  }
}
