import { getConnectionOptions, ConnectionOptions, createConnection } from 'typeorm';
import { NamingStrategy } from './database.naming.strategy'

export async function databaseConnection() {
    return await getConnectionOptions()
        .then(connectionOptions => {
            var options: ConnectionOptions;
            
            // apply NamingStrategy option for DB TableName and ColumnName, using snake_case
            options = Object.assign(connectionOptions, {namingStrategy: new NamingStrategy()});

            options = Object.assign(options,{ 
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}'
                ]
            });

            console.log(options);
            
            return createConnection(options);
        })
}