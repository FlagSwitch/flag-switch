import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { DashboardUserModule } from './dashboardUser/dashboardUser.module';
import { ApplicationModule } from './application/application.module';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  imports: [
    UserModule,
    AccountModule,
    DashboardUserModule,
    ApplicationModule,
    EnvironmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
