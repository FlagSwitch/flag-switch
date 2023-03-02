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
exports.StateController = void 0;
const common_1 = require("@nestjs/common");
const state_service_1 = require("./state.service");
const create_state_dto_1 = require("./dto/create-state.dto");
const update_state_dto_1 = require("./dto/update-state.dto");
let StateController = class StateController {
    constructor(stateService) {
        this.stateService = stateService;
    }
    async createState(createStateDto) {
        const { name, projectId } = createStateDto;
        return this.stateService.createState({
            name,
            project: {
                connect: {
                    id: projectId,
                },
            },
        });
    }
    async updateState({ id }, updateStateDto) {
        return this.stateService.updateState({
            where: { id },
            data: updateStateDto,
        });
    }
};
__decorate([
    (0, common_1.Post)('state'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_state_dto_1.CreateStateDto]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "createState", null);
__decorate([
    (0, common_1.Put)('state/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_state_dto_1.UpdateStateDtoParams,
        update_state_dto_1.UpdateStateDto]),
    __metadata("design:returntype", Promise)
], StateController.prototype, "updateState", null);
StateController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [state_service_1.StateService])
], StateController);
exports.StateController = StateController;
//# sourceMappingURL=state.controller.js.map