"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerModule = void 0;
const common_1 = require("@nestjs/common");
const scheduler_service_1 = require("./scheduler.service");
const scheduler_controller_1 = require("./scheduler.controller");
const typeorm_1 = require("@nestjs/typeorm");
const scheduler_entity_1 = require("./scheduler.entity");
const sent_sms_entity_1 = require("./sent-sms.entity");
const recipient_entity_1 = require("./recipient.entity");
let SchedulerModule = class SchedulerModule {
};
SchedulerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([scheduler_entity_1.Scheduler, sent_sms_entity_1.SentSms, recipient_entity_1.Recipient])],
        providers: [scheduler_service_1.SchedulerService],
        controllers: [scheduler_controller_1.SchedulerController],
    })
], SchedulerModule);
exports.SchedulerModule = SchedulerModule;
//# sourceMappingURL=scheduler.module.js.map