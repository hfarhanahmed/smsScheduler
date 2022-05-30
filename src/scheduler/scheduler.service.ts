import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, LessThan, Between } from 'typeorm';
// import { HttpService } from '@nestjs/axios';
import { Scheduler } from './scheduler.entity';
// import { Cron } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
    public constructor(
        @InjectRepository(Scheduler)
        private readonly schedulerRepository: Repository<Scheduler>,
    ) { }

    public createScheduler = async (scheduler: Scheduler): Promise<Scheduler> => {
        return await this.schedulerRepository.save(this.schedulerRepository.create(scheduler));
    };

    public getSchedulers = async (
        dateStart?: string,
        dateEnd?: string,
    ): Promise<Scheduler[]> => {
        if (dateStart.length > 0 && dateEnd.length > 0) {
            return await this.schedulerRepository.find({
                where: { executionTime: Between(dateStart, dateEnd) },
                relations: ['recipients']
            });
        } else if (dateStart.length > 0) {
            return await this.schedulerRepository.find({
                where: { executionTime: MoreThan(dateStart) },
                relations: ['recipients']
            });
        } else if (dateEnd.length > 0) {
            return await this.schedulerRepository.find({
                where: { executionTime: LessThan(dateEnd) },
                relations: ['recipients']
            });
        } else {
            return await this.schedulerRepository.find({
                relations: ['recipients']
            });
        }
    };

    // @Cron('0 */30 8-18 * * *')
    // private updateSmsResponse() {
    //     // const getSmsResponse = this.proxyService.getSmsStatus();
    // }
}
