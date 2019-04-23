import {Getter, inject} from '@loopback/core';
import {
    BelongsToAccessor,
    DefaultCrudRepository,
    juggler,
    repository,
} from '@loopback/repository';
import {Client, Rent} from '../models';
import {ClientRepository} from './client.repository';

export class RentRepository extends DefaultCrudRepository<Rent, typeof Rent.prototype.id> {
    public readonly client: BelongsToAccessor<Client, typeof Rent.prototype.id>;

    constructor(
        @inject('datasources.db') dataSource: juggler.DataSource,
        @repository.getter('ClientRepository')
        protected clientRepositoryGetter: Getter<ClientRepository>
    ) {
        super(Rent, dataSource);

        this.client = this.createBelongsToAccessorFor(
            'client',
            clientRepositoryGetter,
        );
    }
}
