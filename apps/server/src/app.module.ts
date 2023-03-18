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
import { ConfigModule, ConfigService } from "@nestjs/config";
import databaseConfig from "./config/database.config";
import authConfig from "./config/auth.config";
import appConfig from "./config/app.config";
import { MailConfigService } from "./mail/mail-config.service";
import mailConfig from "./config/mail.config";
import { I18nModule, HeaderResolver } from "nestjs-i18n";
import { AuthModule } from "./auth/auth.module";
import { MailerModule } from "@nestjs-modules/mailer";
import { ForgotModule } from "./forgot/forgot.module";
import { FeatureTypeModule } from "./featureType/featureType.module";
import { MailModule } from "./mail/mail.module";
import { APP_GUARD } from "@nestjs/core";
import { JwtAuthGuard } from "./auth/guards/jwtAuthGuard";
import path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig, mailConfig],
      envFilePath: [".env"],
    }),
    MailerModule.forRootAsync({
      useClass: MailConfigService,
    }),
    I18nModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        fallbackLanguage: configService.get("app.fallbackLanguage"),
        loaderOptions: { path: path.join(__dirname, "/i18n/"), watch: true },
      }),
      resolvers: [
        {
          use: HeaderResolver,
          useFactory: (configService: ConfigService) => {
            return [configService.get("app.headerLanguage")];
          },
          inject: [ConfigService],
        },
      ],
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    AuthModule,
    MailModule,
    ForgotModule,
    UserModule,
    DashboardUserModule,
    ApplicationModule,
    EnvironmentModule,
    StateModule,
    FeatureModule,
    EnvFeatureModule,
    ProjectModule,
    FeatureTypeModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
