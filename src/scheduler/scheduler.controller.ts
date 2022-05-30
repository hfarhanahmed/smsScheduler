import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Scheduler } from './scheduler.entity';
import { SchedulerService } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {
    constructor(private readonly schedulerService: SchedulerService) { }

    @Post('create')
    createScheduler(@Body() scheduler: Scheduler): Promise<any> {
        return this.schedulerService
            .createScheduler(scheduler)
            .then((scheduler) => {
                return scheduler;
            })
            .catch((error) => {
                return { error };
            });
    }

    @Get('list')
    getSchedulers(@Query() dateStart?: string, @Query() dateEnd?: string): Promise<any> {
        return this.schedulerService
            .getSchedulers(dateStart, dateEnd)
            .then((schedulers) => {
                return schedulers;
            })
            .catch((error) => {
                return { error };
            });
    }
}
