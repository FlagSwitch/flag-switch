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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProjectService = class ProjectService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async project(projectWhereUniqueInput) {
        return this.prisma.project.findUnique({
            where: projectWhereUniqueInput,
        });
    }
    async projects(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.project.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
            include: {
                _count: {
                    select: {
                        dashboardUsers: true,
                        features: true,
                    },
                },
            },
        });
    }
    async createProject(data) {
        return this.prisma.project.create({
            data,
        });
    }
    async updateProject(params) {
        const { where, data } = params;
        return this.prisma.project.update({
            data,
            where,
        });
    }
    async deleteProject(where) {
        return this.prisma.project.delete({
            where,
        });
    }
};
ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectService);
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map