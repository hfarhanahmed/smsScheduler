import { Repository } from 'typeorm';
import { Scheduler } from './scheduler.entity';
export declare class SchedulerService {
    private readonly schedulerRepository;
    constructor(schedulerRepository: Repository<Scheduler>);
    createScheduler: (scheduler: Scheduler) => Promise<Scheduler>;
    getSchedulers: (dateStart?: string, dateEnd?: string) => Promise<Scheduler[]>;
}
