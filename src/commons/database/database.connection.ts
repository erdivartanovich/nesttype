import { getConnectionOptions, ConnectionOptions, createConnection } from 'typeorm';
import { NamingStrategy } from './database.naming.strategy'

export async function databaseConnection() {
    return await getConnectionOptions()
        .then(connectionOptions => {
            var options: ConnectionOptions;
            
            options = Object.assign(connectionOptions,{ 
                entities: [
                    __dirname + '/../../**/*.entity{.ts,.js}'
                ]
            });
            
            // apply NamingStrategy option for DB TableName and ColumnName, using snake_case
            // apply auto synchronize schema option
            options = Object.assign(options, {
                synchronize: true,
                namingStrategy: new NamingStrategy(),
                subscribers: [__dirname + '/../../**/*.subscriber{.ts,.js}']
            });

            return createConnection(options);
        })
}