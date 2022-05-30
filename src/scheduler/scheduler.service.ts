import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan, LessThan, Between } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { Scheduler } from './scheduler.entity';
import { Cron } from '@nestjs/schedule';
import { ISendSMS } from 'src/interface/sendSms.interface';
import { SentSms } from '../sent-sms/sent-sms.entity';
import { SentSmsService } from '../sent-sms/sent-sms.service';

@Injectable()
export class SchedulerService {
    public constructor(
        @InjectRepository(Scheduler)
        private readonly schedulerRepository: Repository<Scheduler>,
        private readonly smsService: SentSmsService,
        private httpService: HttpService
    ) { }

    public createScheduler = async (scheduler: Scheduler): Promise<Scheduler> => {
        return await this.schedulerRepository.save(this.schedulerRepository.create(scheduler));
    };

    public getSchedulers = async (
        dateStart?: Date,
        dateEnd?: Date,
    ): Promise<Scheduler[]> => {
        if (dateStart && dateEnd) {
            return await this.schedulerRepository.find({
                where: { executionTime: Between(dateStart, dateEnd) },
                relations: ['recipients']
            });
        } else if (dateStart) {
            return await this.schedulerRepository.find({
                where: { executionTime: MoreThan(dateStart) },
                relations: ['recipients']
            });
        } else if (dateEnd) {
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

    @Cron('0 */30 * * * *')
    private async sentSms() {
        const dateTimeNow = new Date()
        const dateTime30mins = new Date()
        const schedulers = await this.getSchedulers(dateTimeNow, dateTime30mins);

        while (schedulers.length > 0) {
            const scheduler = schedulers[0];
            if (scheduler.executionTime <= new Date()) {
                const data: ISendSMS = { dnis: scheduler.recipients.map(recipient => recipient.number), message: scheduler.message }
                const response: any = await this.httpService.post(`${process.env.BASE_URL}api`, data);
                const sentSmsData: SentSms = new SentSms();
                sentSmsData.messageId = response.data.message_id;
                sentSmsData.scheduler = scheduler;
                await this.smsService.save(sentSmsData);
                schedulers.pop();
            }
        }

    }

    @Cron('0 */30 8-19 * * *')
    private async updateSmsResponse() {
        const sentSmses = await this.smsService.findSmsWithStatusUnknown();
        sentSmses.forEach(async (sms) => {
            const response: any = await this.httpService.get(`${process.env.BASE_URL}api`);
            sms.status = response.data.status;
            await this.smsService.update(sms);
        })
    }

}
