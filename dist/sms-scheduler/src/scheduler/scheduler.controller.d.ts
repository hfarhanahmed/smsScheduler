import { Scheduler } from './scheduler.entity';
import { SchedulerService } from './scheduler.service';
export declare class SchedulerController {
    private readonly schedulerService;
    constructor(schedulerService: SchedulerService);
    createScheduler(scheduler: Scheduler): Promise<any>;
    getSchedulers(dateStart?: string, dateEnd?: string): Promise<any>;
}
