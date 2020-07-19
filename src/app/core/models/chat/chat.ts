import {Message} from './message';

export interface Chat {
    // https://github.com/moeidsaleem/angularfire-chat
    chatId: any;
    messages: Array<Message>;
}
