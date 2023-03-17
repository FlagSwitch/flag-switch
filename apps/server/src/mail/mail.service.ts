import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { I18nContext } from "nestjs-i18n";
import { MailData } from "./interfaces/mail-data.interface";

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService
  ) {}

  async userSignUp(mailData: MailData<{ token: string }>) {
    const i18n = I18nContext.current();

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: i18n.t("common.confirmEmail"),
      text: `${this.configService.get("app.frontendDomain")}/confirm-email/${
        mailData.data.token
      } ${i18n.t("common.confirmEmail")}`,
      template: "activation",
      context: {
        title: i18n.t("common.confirmEmail"),
        url: `${this.configService.get("app.frontendDomain")}/confirm-email/${
          mailData.data.token
        }`,
        actionTitle: i18n.t("common.confirmEmail"),
        app_name: this.configService.get("app.name"),
        text1: i18n.t("confirm-email.text1"),
        text2: i18n.t("confirm-email.text2"),
        text3: i18n.t("confirm-email.text3"),
      },
    });
  }

  async forgotPassword(mailData: MailData<{ token: string }>) {
    const i18n = I18nContext.current();

    await this.mailerService.sendMail({
      to: mailData.to,
      subject: i18n.t("common.resetPassword"),
      text: `${this.configService.get("app.frontendDomain")}/password-change/${
        mailData.data.token
      } ${i18n.t("common.resetPassword")}`,
      template: "reset-password",
      context: {
        title: i18n.t("common.resetPassword"),
        url: `${this.configService.get("app.frontendDomain")}/password-change/${
          mailData.data.token
        }`,
        actionTitle: i18n.t("common.resetPassword"),
        app_name: this.configService.get("app.name"),
        text1: i18n.t("reset-password.text1"),
        text2: i18n.t("reset-password.text2"),
        text3: i18n.t("reset-password.text3"),
        text4: i18n.t("reset-password.text4"),
      },
    });
  }
}
