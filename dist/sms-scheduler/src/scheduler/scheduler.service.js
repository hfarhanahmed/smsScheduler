"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const scheduler_entity_1 = require("./scheduler.entity");
let SchedulerService = class SchedulerService {
    constructor(schedulerRepository) {
        this.schedulerRepository = schedulerRepository;
        this.createScheduler = async (scheduler) => {
            return await this.schedulerRepository.save(scheduler);
        };
        this.getSchedulers = async (dateStart, dateEnd) => {
            if (dateStart.length > 0 && dateEnd.length > 0) {
                return await this.schedulerRepository.find({
                    where: { executionTime: (0, typeorm_2.Between)(dateStart, dateEnd) },
                });
            }
            else if (dateStart.length > 0) {
                return await this.schedulerRepository.find({
                    where: { executionTime: (0, typeorm_2.MoreThan)(dateStart) },
                });
            }
            else if (dateEnd.length > 0) {
                return await this.schedulerRepository.find({
                    where: { executionTime: (0, typeorm_2.LessThan)(dateEnd) },
                });
            }
            else {
                return await this.schedulerRepository.find();
            }
        };
    }
};
SchedulerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scheduler_entity_1.Scheduler)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SchedulerService);
exports.SchedulerService = SchedulerService;
//# sourceMappingURL=scheduler.service.js.map