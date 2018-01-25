import { EventSubscriber, EntitySubscriberInterface, UpdateEvent, Entity } from 'typeorm';
import { Pot } from './pot.entity';
import { PotModule } from './pot.module';
import { PotService } from './pot.service';
import { Notification } from '../../infrastructures/push-notification/notification';
import { Publisher } from '../../infrastructures/push-notification';
import { AppContainer } from '../../commons/app.container';
@EventSubscriber()
export class PotSubscriber implements EntitySubscriberInterface<Pot> {

    constructor(private potService: PotService) {}
    /**
     * Indicates that this subscriber only listen to Pot events.
     */
    listenTo() {
        return Pot;
    }

    /**
     * Called after pot update.
     */
    async afterUpdate(event: UpdateEvent<Pot>) {
        var user_id: any;
        var notification: Notification;
        this.potService = AppContainer.getService('PotService');
        user_id = await this.potService.findUserByPotID(event.entity.id);
        notification = new Notification(Publisher);
        notification.setTitle('Receive notification from Pot')
                    .setMessage('Pot sensor data updated')
                    .setDomain('pots')
                    .setType('info')
                    .setTargets([user_id])
                    .setFrom(event.entity.id)
                    .setData(event.entity);
        notification.publish();
 1   }

}