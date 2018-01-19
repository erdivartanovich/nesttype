import { Connection, Repository } from 'typeorm';
import { Container } from './container.entity';

export const containerProviders = [
  {
    provide: 'ContainerRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Container),
    inject: ['DbConnectionToken'],
  },
];