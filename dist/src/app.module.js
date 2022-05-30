"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const scheduler_module_1 = require("./scheduler/scheduler.module");
const typeorm_1 = require("@nestjs/typeorm");
const environment_1 = require("./environments/environment");
const typeorm_2 = require("typeorm");
const scheduler_controller_1 = require("./scheduler/scheduler.controller");
const scheduler_service_1 = require("./scheduler/scheduler.service");
const scheduler_entity_1 = require("./scheduler/scheduler.entity");
const sent_sms_entity_1 = require("./scheduler/sent-sms.entity");
const recipient_entity_1 = require("./scheduler/recipient.entity");
const ENTITIES = [scheduler_entity_1.Scheduler, sent_sms_entity_1.SentSms, recipient_entity_1.Recipient];
const MODULES = [
    typeorm_1.TypeOrmModule.forRoot(Object.assign(Object.assign({}, environment_1.typeormConfiguration), { entities: (0, typeorm_2.getMetadataArgsStorage)().tables.map(({ target }) => target) })),
    scheduler_module_1.SchedulerModule,
    typeorm_1.TypeOrmModule.forFeature(ENTITIES),
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: MODULES,
        controllers: [app_controller_1.AppController, scheduler_controller_1.SchedulerController],
        providers: [app_service_1.AppService, scheduler_service_1.SchedulerService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map