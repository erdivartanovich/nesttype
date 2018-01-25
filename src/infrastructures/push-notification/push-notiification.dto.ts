export interface PushNotificationDto {
    title: string, // the title of notification
    message: string, // the body of notification
    data: Object, // should contain any data regarding the notification
    domain: string, // entity identifier
    type: string,  // used for identify notification type
    from: string, // user id of the sender
    targets: string[] // user id of the target
}