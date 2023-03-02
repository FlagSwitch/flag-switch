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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const application_service_1 = require("./application.service");
const create_application_dto_1 = require("./dto/create-application.dto");
const update_application_dto_1 = require("./dto/update-application.dto");
let AccountController = class AccountController {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    async createAccount(createApplicationDto) {
        const { name, accountId } = createApplicationDto;
        return this.applicationService.createApplication({
            name,
            account: {
                connect: {
                    id: accountId,
                },
            },
        });
    }
    async updateAccount({ id }, updateApplicationDto) {
        return this.applicationService.updateApplication({
            where: { id },
            data: updateApplicationDto,
        });
    }
};
__decorate([
    (0, common_1.Post)('application'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_application_dto_1.CreateApplicationDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Put)('application/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_application_dto_1.UpdateApplicationDtoParams,
        update_application_dto_1.UpdateApplicationDto]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "updateAccount", null);
AccountController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [application_service_1.ApplicationService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=application.controller.js.map