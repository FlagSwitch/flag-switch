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
exports.FeatureController = void 0;
const common_1 = require("@nestjs/common");
const feature_service_1 = require("./feature.service");
const create_feature_dto_1 = require("./dto/create-feature.dto");
const update_feature_dto_1 = require("./dto/update-feature.dto");
let FeatureController = class FeatureController {
    constructor(featureService) {
        this.featureService = featureService;
    }
    async createAccount(createFeatureDto) {
        const { name, type, projectId, createdBy } = createFeatureDto;
        return this.featureService.createFeature({
            name,
            type,
            createdBy,
            project: {
                connect: {
                    id: projectId,
                },
            },
        });
    }
    async updateFeature({ id }, updateFeatureDto) {
        return this.featureService.updateFeature({
            where: { id },
            data: updateFeatureDto,
        });
    }
};
__decorate([
    (0, common_1.Post)('feature'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feature_dto_1.CreateFeatureDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Put)('feature/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_feature_dto_1.UpdateFeatureDtoParams,
        update_feature_dto_1.UpdateFeatureDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "updateFeature", null);
FeatureController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [feature_service_1.FeatureService])
], FeatureController);
exports.FeatureController = FeatureController;
//# sourceMappingURL=feature.controller.js.map