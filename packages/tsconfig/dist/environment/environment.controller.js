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
exports.EnvironmentController = void 0;
const common_1 = require("@nestjs/common");
const environment_service_1 = require("./environment.service");
const create_environment_dto_1 = require("./dto/create-environment.dto");
const update_environment_dto_1 = require("./dto/update-environment.dto");
let EnvironmentController = class EnvironmentController {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    async createEnvironment(createEnvironmentDto) {
        const { name, accountId } = createEnvironmentDto;
        return this.environmentService.createEnvironment({
            name,
            account: {
                connect: {
                    id: accountId,
                },
            },
        });
    }
    async updateEnvironment({ id }, updateEnvironmentDto) {
        return this.environmentService.updateEnvironment({
            where: { id },
            data: updateEnvironmentDto,
        });
    }
};
__decorate([
    (0, common_1.Post)('environment'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_environment_dto_1.CreateEnvironmentDto]),
    __metadata("design:returntype", Promise)
], EnvironmentController.prototype, "createEnvironment", null);
__decorate([
    (0, common_1.Put)('environment/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_environment_dto_1.UpdateEnvironmentDtoParams,
        update_environment_dto_1.UpdateEnvironmentDto]),
    __metadata("design:returntype", Promise)
], EnvironmentController.prototype, "updateEnvironment", null);
EnvironmentController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], EnvironmentController);
exports.EnvironmentController = EnvironmentController;
//# sourceMappingURL=environment.controller.js.map