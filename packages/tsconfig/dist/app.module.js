"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const account_module_1 = require("./account/account.module");
const dashboardUser_module_1 = require("./dashboardUser/dashboardUser.module");
const application_module_1 = require("./application/application.module");
const environment_module_1 = require("./environment/environment.module");
const state_module_1 = require("./state/state.module");
const envFeature_module_1 = require("./envFeature/envFeature.module");
const feature_module_1 = require("./feature/feature.module");
const project_module_1 = require("./project/project.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            account_module_1.AccountModule,
            dashboardUser_module_1.DashboardUserModule,
            application_module_1.ApplicationModule,
            environment_module_1.EnvironmentModule,
            state_module_1.StateModule,
            feature_module_1.FeatureModule,
            envFeature_module_1.EnvFeatureModule,
            project_module_1.ProjectModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map