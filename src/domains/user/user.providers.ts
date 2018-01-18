import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: 'UserRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DbConnectionToken'],
  },
];