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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const create_project_dto_1 = require("./dto/create-project.dto");
const update_project_dto_1 = require("./dto/update-project.dto");
let ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async getProjects() {
        return this.projectService.projects({});
    }
    async createProject(createProjectDto) {
        const { name, description, accountId } = createProjectDto;
        return this.projectService.createProject({
            name,
            description,
            account: {
                connect: {
                    id: accountId,
                },
            },
        });
    }
    async updateProject({ id }, updateProjectDto) {
        return this.projectService.updateProject({
            where: { id },
            data: updateProjectDto,
        });
    }
};
__decorate([
    (0, common_1.Get)('projects'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "getProjects", null);
__decorate([
    (0, common_1.Post)('project'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.CreateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "createProject", null);
__decorate([
    (0, common_1.Put)('project/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_project_dto_1.UpdateProjectDtoParams,
        update_project_dto_1.UpdateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "updateProject", null);
ProjectController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
exports.ProjectController = ProjectController;
//# sourceMappingURL=project.controller.js.map