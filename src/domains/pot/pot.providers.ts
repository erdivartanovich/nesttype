import { Connection, Repository } from 'typeorm';
import { Pot } from './pot.entity';

export const potProviders = [
  {
    provide: 'PotRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Pot),
    inject: ['DbConnectionToken'],
  },
];