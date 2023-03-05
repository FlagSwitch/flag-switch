import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { AuthEmailLoginDto } from "./dto/auth-email-login.dto";
import { AuthUpdateDto } from "./dto/auth-update.dto";
import { randomStringGenerator } from "@nestjs/common/utils/random-string-generator.util";
import * as crypto from "crypto";
import { AuthRegisterLoginDto } from "./dto/auth-register-login.dto";
import { DashboardUserService } from "src/dashboardUser/dashboardUser.service";
import { ForgotService } from "src/forgot/forgot.service";
import { MailService } from "src/mail/mail.service";
import { DashboardUser, RoleEnum, StatusEnum } from "prisma-client";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private dashboardUserService: DashboardUserService,
    private forgotService: ForgotService,
    private mailService: MailService
  ) {}

  async validateLogin(
    loginDto: AuthEmailLoginDto,
    onlyAdmin: boolean
  ): Promise<{ token: string; user: DashboardUser }> {
    const dashboardUser = await this.dashboardUserService.findOne({
      email: loginDto.email,
    });

    if (
      !dashboardUser ||
      (dashboardUser &&
        !(
          onlyAdmin ? [RoleEnum.Admin as string] : [RoleEnum.User as string]
        ).includes(dashboardUser.role))
    ) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: "notFound",
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }

    const isValidPassword = await bcrypt.compare(
      loginDto.password,
      dashboardUser.password
    );

    if (isValidPassword) {
      const token = this.jwtService.sign({
        id: dashboardUser.id,
        role: dashboardUser.role,
      });

      return { token, user: dashboardUser };
    } else {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            password: "incorrectPassword",
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
  }

  async register(dto: AuthRegisterLoginDto): Promise<void> {
    const hash = crypto
      .createHash("sha256")
      .update(randomStringGenerator())
      .digest("hex");

    const user = await this.dashboardUserService.create({
      ...dto,
      email: dto.email,
      role: RoleEnum.User,
      status: StatusEnum.Inactive,
      hash,
    });

    await this.mailService.userSignUp({
      to: user.email,
      data: {
        hash,
      },
    });
  }

  async confirmEmail(hash: string): Promise<void> {
    const dashboardUser = await this.dashboardUserService.findOne({
      hash,
    });

    if (!dashboardUser) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `notFound`,
        },
        HttpStatus.NOT_FOUND
      );
    }
    await this.dashboardUserService.update({
      where: { id: dashboardUser.id },
      data: {
        hash: null,
        status: StatusEnum.Active,
      },
    });
  }

  async forgotPassword(email: string): Promise<void> {
    const dashboardUser = await this.dashboardUserService.findOne({
      email,
    });

    if (!dashboardUser) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            email: "emailNotExists",
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    } else {
      const hash = crypto
        .createHash("sha256")
        .update(randomStringGenerator())
        .digest("hex");
      await this.forgotService.create({
        hash,
        dashboardUser: {
          connect: {
            id: dashboardUser.id,
          },
        },
      });

      await this.mailService.forgotPassword({
        to: email,
        data: {
          hash,
        },
      });
    }
  }

  async resetPassword(hash: string, password: string): Promise<void> {
    const forgot = await this.forgotService.findOne({
      hash,
    });

    if (!forgot) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          errors: {
            hash: `notFound`,
          },
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
    await this.dashboardUserService.update({
      where: { id: forgot.dashboardUserId },
      data: {
        password,
      },
    });
    await this.forgotService.softDelete({
      id: forgot.id,
    });
  }

  async me(dashboardUser: DashboardUser): Promise<DashboardUser> {
    return this.dashboardUserService.findOne({
      id: dashboardUser.id,
    });
  }

  async update(
    user: DashboardUser,
    userDto: AuthUpdateDto
  ): Promise<DashboardUser> {
    if (userDto.password) {
      if (userDto.oldPassword) {
        const currentUser = await this.dashboardUserService.findOne({
          id: user.id,
        });

        const isValidOldPassword = await bcrypt.compare(
          userDto.oldPassword,
          currentUser.password
        );

        if (!isValidOldPassword) {
          throw new HttpException(
            {
              status: HttpStatus.UNPROCESSABLE_ENTITY,
              errors: {
                oldPassword: "incorrectOldPassword",
              },
            },
            HttpStatus.UNPROCESSABLE_ENTITY
          );
        }
      } else {
        throw new HttpException(
          {
            status: HttpStatus.UNPROCESSABLE_ENTITY,
            errors: {
              oldPassword: "missingOldPassword",
            },
          },
          HttpStatus.UNPROCESSABLE_ENTITY
        );
      }
    }

    return await this.dashboardUserService.update({
      where: {
        id: user.id,
      },
      data: userDto,
    });
  }

  async softDelete(dashboardUser: DashboardUser): Promise<void> {
    await this.dashboardUserService.softDelete({
      id: dashboardUser.id,
    });
  }
}
