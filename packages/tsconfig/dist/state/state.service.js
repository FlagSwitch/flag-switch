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
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let StateService = class StateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async state(stateWhereUniqueInput) {
        return this.prisma.state.findUnique({
            where: stateWhereUniqueInput,
        });
    }
    async states(params) {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.state.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }
    async createState(data) {
        return this.prisma.state.create({
            data,
        });
    }
    async updateState(params) {
        const { where, data } = params;
        return this.prisma.state.update({
            data,
            where,
        });
    }
    async deleteState(where) {
        return this.prisma.state.delete({
            where,
        });
    }
};
StateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StateService);
exports.StateService = StateService;
//# sourceMappingURL=state.service.js.map