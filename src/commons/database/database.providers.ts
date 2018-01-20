import { createConnection, getConnectionOptions } from 'typeorm';
import { databaseConnection } from './database.connection';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await databaseConnection()
  },
];