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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardUserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let DashboardUserService = class DashboardUserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async dashboardUser(dashboardUserWhereUniqueInput) {
        return this.prisma.dashboardUser.findUnique({
            where: dashboardUserWhereUniqueInput,
        });
    }
    async dashboardUsers(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.dashboardUser.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createDashboardUser(data) {
        return this.prisma.dashboardUser.create({
            data,
        });
    }
    async updateDashboardUser(params) {
        const { where, data } = params;
        return this.prisma.dashboardUser.update({
            data,
            where,
        });
    }
    async deleteDashboardUser(where) {
        return this.prisma.dashboardUser.delete({
            where,
        });
    }
};
DashboardUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardUserService);
exports.DashboardUserService = DashboardUserService;
//# sourceMappingURL=dashboardUser.service.js.map