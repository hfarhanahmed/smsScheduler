import { Recipient } from './recipient.entity';
export declare class Scheduler {
    id: string;
    message: string;
    executionTime: Date;
    recipients: Recipient[];
}
