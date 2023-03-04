import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { DashboardUserModule } from "./dashboardUser/dashboardUser.module";
import { ApplicationModule } from "./application/application.module";
import { EnvironmentModule } from "./environment/environment.module";
import { StateModule } from "./state/state.module";
import { EnvFeatureModule } from "./envFeature/envFeature.module";
import { FeatureModule } from "./feature/feature.module";
import { ProjectModule } from "./project/project.module";

@Module({
  imports: [
    UserModule,
    DashboardUserModule,
    ApplicationModule,
    EnvironmentModule,
    StateModule,
    FeatureModule,
    EnvFeatureModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
