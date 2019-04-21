import {Getter, inject} from '@loopback/core';
import {
    DefaultCrudRepository,
    HasManyRepositoryFactory,
    juggler,
    repository,
    Filter
} from '@loopback/repository';
import {Movie, MovieCopy} from '../models';
import {MovieCopyRepository} from './movie-copy.repository';

export class MovieRepository extends DefaultCrudRepository<Movie, typeof Movie.prototype.id> {
    public readonly copies: HasManyRepositoryFactory<MovieCopy, typeof Movie.prototype.id>;

    constructor(
        @inject('datasources.db') dataSource: juggler.DataSource,
        @repository.getter('MovieCopyRepository')
        protected movieCopyRepositoryGetter: Getter<MovieCopyRepository>,
    ) {
        super(Movie, dataSource);
        this.copies = this.createHasManyRepositoryFactoryFor(
            'copies',
            movieCopyRepositoryGetter,
        );
    }

    public findSearch(filter?: Filter, title?: string) {
        filter = filter || ({} as Filter);

        if (!title) {
            return this.find(filter);
        }

        if (title || title.length) {
            filter.where = {title: {like: '%' + title + '%'}};
        }

        return this.find(filter);
    }
}
