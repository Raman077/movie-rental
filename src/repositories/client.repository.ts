import {Getter, inject} from '@loopback/core';
import {
    DefaultCrudRepository,
    HasManyRepositoryFactory,
    juggler,
    repository,
} from '@loopback/repository';
import {Client, Rent} from '../models';
import {RentRepository} from './rent.repository';

export class ClientRepository extends DefaultCrudRepository<Client, typeof Client.prototype.id> {
    public readonly rents: HasManyRepositoryFactory<Rent, typeof Client.prototype.id>;

    constructor(
        @inject('datasources.db') dataSource: juggler.DataSource,
        @repository.getter('RentRepository')
        protected rentRepositoryGetter: Getter<RentRepository>,
    ) {
        super(Client, dataSource);
        this.rents = this.createHasManyRepositoryFactoryFor(
            'rents',
            rentRepositoryGetter,
        );
    }
}
