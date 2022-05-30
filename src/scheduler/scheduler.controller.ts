import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Scheduler } from './scheduler.entity';
import { SchedulerService } from './scheduler.service';

@Controller('scheduler')
export class SchedulerController {
    constructor(private readonly schedulerService: SchedulerService) { }

    @Post('create')
    createScheduler(@Body() scheduler: Scheduler): Promise<Scheduler> {
        return this.schedulerService.createScheduler(scheduler);
    }

    @Get('list')
    getSchedulers(@Query() dateStart?: string, @Query() dateEnd?: string): Promise<Scheduler[]> {
        return this.schedulerService.getSchedulers(dateStart, dateEnd);
    }
}
