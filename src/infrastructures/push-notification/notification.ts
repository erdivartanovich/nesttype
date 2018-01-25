import { PushNotificationDto } from './push-notiification.dto';
import { PushNotificationClient } from './push-notification.client';

export class Notification implements PushNotificationDto {
    private publisher;
    public title: string;
    public message: string;
    public domain: string;
    public type: string;
    public from: string;
    public targets: string[];
    public data: Object;

    constructor(publisher: PushNotificationClient) {
        this.publisher = publisher;
    }

    public setTitle(value: string) {
        this.title = value;
        return this;
    }

    public setMessage(value: string) {
        this.message = value;
        return this;
    }

    public setDomain(value: string) {
        this.domain = value;
        return this;
    }

    public setFrom(value: string) {
        this.from = value;
        return this;
    }

    public setTargets(values: string[]) {
        this.targets = values;
        return this;
    }

    public setType(value: string) {
        this.type = value;
        return this;
    }

    public setData(value: Object) {
        this.data = value;
        return this;
    }

    public publish() {
        return this.publisher.publish(this);
    }

}
