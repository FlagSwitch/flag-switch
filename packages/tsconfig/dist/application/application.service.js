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
exports.ApplicationService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ApplicationService = class ApplicationService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async account(accountWhereUniqueInput) {
        return this.prisma.application.findUnique({
            where: accountWhereUniqueInput,
        });
    }
    async applications(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.application.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createApplication(data) {
        return this.prisma.application.create({
            data,
        });
    }
    async updateApplication(params) {
        const { where, data } = params;
        return this.prisma.application.update({
            data,
            where,
        });
    }
    async deleteApplication(where) {
        return this.prisma.application.delete({
            where,
        });
    }
};
ApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ApplicationService);
exports.ApplicationService = ApplicationService;
//# sourceMappingURL=application.service.js.map