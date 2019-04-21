import {Getter, inject} from '@loopback/core';
import {
    BelongsToAccessor,
    DefaultCrudRepository,
    juggler,
    repository,
    Filter
} from '@loopback/repository';
import {Movie, MovieCopy} from '../models';
import {MovieRepository} from './movie.repository';

export class MovieCopyRepository extends DefaultCrudRepository<MovieCopy, typeof MovieCopy.prototype.id> {
    public readonly movie: BelongsToAccessor<Movie, typeof MovieCopy.prototype.id>;

    constructor(
        @inject('datasources.db') dataSource: juggler.DataSource,
        @repository.getter('MovieRepository')
        protected movieRepositoryGetter: Getter<MovieRepository>,
    ) {
        super(MovieCopy, dataSource);

        this.movie = this.createBelongsToAccessorFor(
            'movie',
            movieRepositoryGetter,
        );
    }

    public findByMovie(id: number) {
        const filter = {} as Filter;

        filter.where = {movieId: id};

        return this.find(filter);
    }

}
