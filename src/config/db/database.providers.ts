import { createConnection, getConnectionOptions } from 'typeorm';
import { NamingStrategy } from './naming.strategy';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async () => await getConnectionOptions()
      .then(connectionOptions => {
        return createConnection(Object.assign(
            connectionOptions, 
            {
              namingStrategy: new NamingStrategy()
            }
        ))
      })
  },
];