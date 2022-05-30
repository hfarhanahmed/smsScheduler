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
exports.SchedulerController = void 0;
const common_1 = require("@nestjs/common");
const scheduler_entity_1 = require("./scheduler.entity");
const scheduler_service_1 = require("./scheduler.service");
let SchedulerController = class SchedulerController {
    constructor(schedulerService) {
        this.schedulerService = schedulerService;
    }
    createScheduler(scheduler) {
        return this.schedulerService
            .createScheduler(scheduler)
            .then((scheduler) => {
            return scheduler;
        })
            .catch((error) => {
            return { error };
        });
    }
    getSchedulers(dateStart, dateEnd) {
        return this.schedulerService
            .getSchedulers(dateStart, dateEnd)
            .then((schedulers) => {
            return schedulers;
        })
            .catch((error) => {
            return { error };
        });
    }
};
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [scheduler_entity_1.Scheduler]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "createScheduler", null);
__decorate([
    (0, common_1.Get)('list'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SchedulerController.prototype, "getSchedulers", null);
SchedulerController = __decorate([
    (0, common_1.Controller)('scheduler'),
    __metadata("design:paramtypes", [scheduler_service_1.SchedulerService])
], SchedulerController);
exports.SchedulerController = SchedulerController;
//# sourceMappingURL=scheduler.controller.js.map