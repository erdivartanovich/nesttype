import {INestApplication} from '@nestjs/common';
import {PotModule} from '../domains/pot/pot.module';
import {UserModule} from '../domains/user/user.module';
import { UserService } from '../domains/user/user.service';

/**
 * AppContainer is a global container to store instace of services from Application Context
 */

export const AppContainer = {
    container: {},
    
    // register services here that you want to be extracted from their owener module
    modules: {
        'UserService': UserModule,
        'PotService': PotModule
    },
    
    /**
     * call this from application bootstrap() method in the main server file
     * then all services instance will available globally, they will be stored inside this `modules` key
     */
    initContainer: (app: INestApplication) => {
        const services = Object.keys(AppContainer.modules);
        services.map(service => {
            const serviceInstance = app.select(AppContainer.modules[service]).get(service);
            AppContainer.container[service] = serviceInstance;
        });
    },
    
    /**
     * get service instance by their serviceToken/ name
     */
    getService: (serviceToken: string) => {
        const service = AppContainer.container.hasOwnProperty(serviceToken) ? AppContainer.container[serviceToken] : null;
        return service;  
    }
}