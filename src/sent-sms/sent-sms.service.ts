import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SmsStatus } from 'src/constants/sms-status.enum';
import { Repository } from 'typeorm';
import { SentSms } from './sent-sms.entity';

@Injectable()
export class SentSmsService {
    public constructor(
        @InjectRepository(SentSms)
        private readonly sentSmsRepository: Repository<SentSms>,
    ) { }

    public save = async (sendSms: SentSms): Promise<SentSms> => {
        return await this.sentSmsRepository.save(this.sentSmsRepository.create(sendSms));
    };

    public findSmsWithStatusUnknown = async (): Promise<SentSms[]> => {
        return await this.sentSmsRepository.find({ where: { status: SmsStatus.Unknown } });
    };

    public update = async (sms: SentSms): Promise<void> => {
        await this.sentSmsRepository.update(sms.id, sms);
    };
}
