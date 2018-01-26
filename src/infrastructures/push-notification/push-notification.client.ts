import { PushNotificationDto } from './push-notiification.dto';

var PubNub = require('pubnub');

export class PushNotificationClient  {
    private pubnub;

    constructor() {
        console.log("PubNub initialized");
        this.pubnub = new PubNub({
            subscribeKey: "sub-c-0a90d99c-caa9-11e7-afbf-0e89c33d81b5",
            publishKey: "pub-c-3c64462a-8dec-4164-917c-86e3a370dc4a",
            secretKey: "sec-c-ZTNlMTMyY2UtNWJhOS00MzY3LTgyYWUtM2ZkMGY1ZWYzZWQz",
            ssl: true
        });
    }

    public publish(payload: PushNotificationDto) {
        var {title, message, domain, type, from, targets} = payload;
        var channels = this.buildChannels(domain, targets);
        channels.map(channel => this.pubnub.publish(
            {
                message: this.buildPushNotificationMessage(payload),
                channel: channel,
                sendByPost: false, // true to send via post
                storeInHistory: true, //override default storage options
            }, 
            function (status, response) {
                if (status.error) {
                    // handle error
                    console.log(status);
                } else {
                    console.log("message Published w/ timetoken", response.timetoken, "to channel: ", channel);
                }
            }
        ));
    }

    private buildChannels(domain: string, targets: string[]): string[] {
        return targets.map(target => `users-${target}`);
    }

    private buildPushNotificationMessage(payload: PushNotificationDto) {
        const PNMessage = {
            "pn_apns": {
                "aps": {
                    "alert": {
                        "title": payload.title,
                        "body": payload.message
                    }
                },
                "data": {
                    "domain": payload.domain,
                    "type": payload.type,
                    "from": payload.from,
                    "attributes": payload.data
                }
            },
            "pn_gcm": {
                "data": {
                    "title": payload.title,
                    "body": payload.message,
                },
                "domain": payload.domain,
                "type": payload.type,
                "from": payload.from,
                "attributes": payload.data,
            }
        }
        return PNMessage;
    }

    
}