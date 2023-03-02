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
exports.DashboardUserController = void 0;
const common_1 = require("@nestjs/common");
const dashboardUser_service_1 = require("./dashboardUser.service");
const create_dashboard_user_dto_1 = require("./dto/create-dashboard-user.dto");
const update_dashboard_user_dto_1 = require("./dto/update-dashboard-user.dto");
let DashboardUserController = class DashboardUserController {
    constructor(dashboardUserService) {
        this.dashboardUserService = dashboardUserService;
    }
    async createDashboardUser(createDashboardUserDto) {
        const { name, email, accountId } = createDashboardUserDto;
        return this.dashboardUserService.createDashboardUser({
            name,
            email,
            account: {
                connect: {
                    id: accountId,
                },
            },
        });
    }
    async updateUser({ id }, updateDashboardUserDto) {
        return this.dashboardUserService.updateDashboardUser({
            where: { id },
            data: updateDashboardUserDto,
        });
    }
};
__decorate([
    (0, common_1.Post)('dashboard-user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dashboard_user_dto_1.CreateDashboardUserDto]),
    __metadata("design:returntype", Promise)
], DashboardUserController.prototype, "createDashboardUser", null);
__decorate([
    (0, common_1.Put)('dashboard-user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dashboard_user_dto_1.UpdateDashboardUserDtoParams,
        update_dashboard_user_dto_1.UpdateDashboardUserDto]),
    __metadata("design:returntype", Promise)
], DashboardUserController.prototype, "updateUser", null);
DashboardUserController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [dashboardUser_service_1.DashboardUserService])
], DashboardUserController);
exports.DashboardUserController = DashboardUserController;
//# sourceMappingURL=dashboardUser.controller.js.map