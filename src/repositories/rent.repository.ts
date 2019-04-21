import {Getter, inject} from '@loopback/core';
import {
    BelongsToAccessor,
    DefaultCrudRepository,
    juggler,
    repository,
} from '@loopback/repository';
import {Client, MovieCopy, Rent} from '../models';
import {ClientRepository} from './client.repository';
import {MovieCopyRepository} from './movie-copy.repository';

export class RentRepository extends DefaultCrudRepository<Rent, typeof Rent.prototype.id> {
    public readonly client: BelongsToAccessor<Client, typeof Rent.prototype.id>;
    //public readonly movieCopy: BelongsToAccessor<MovieCopy, typeof Rent.prototype.id>;

    constructor(
        @inject('datasources.db') dataSource: juggler.DataSource,
        @repository.getter('ClientRepository')
        //@repository.getter('MovieCopyRepository')
        protected clientRepositoryGetter: Getter<ClientRepository>,
        //protected movieCopyRepositoryGetter: Getter<MovieCopyRepository>,
    ) {
        super(Rent, dataSource);

        this.client = this.createBelongsToAccessorFor(
            'client',
            clientRepositoryGetter,
        );

        // this.movieCopy = this.createBelongsToAccessorFor(
        //     'movieCopy',
        //     movieCopyRepositoryGetter,
        // );
    }
}
