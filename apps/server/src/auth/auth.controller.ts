import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  Patch,
  Delete,
  SerializeOptions,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import {
  AuthRegisterLoginDto,
  AuthUpdateDto,
  AuthResetPasswordDto,
  AuthConfirmEmailDto,
  AuthForgotPasswordDto,
  AuthEmailLoginDto,
} from "flag-switch-types";
import { Public } from "src/auth/decorators/public";

@ApiTags("Auth")
@Controller({
  path: "auth",
  version: "1",
})
export class AuthController {
  constructor(public service: AuthService) {}

  @Public()
  @SerializeOptions({
    groups: ["me"],
  })
  @Post("email/login")
  @HttpCode(HttpStatus.OK)
  public async login(@Body() loginDto: AuthEmailLoginDto) {
    return this.service.validateLogin(loginDto, false);
  }

  @Public()
  @SerializeOptions({
    groups: ["me"],
  })
  @Post("admin/email/login")
  @HttpCode(HttpStatus.OK)
  public async adminLogin(@Body() loginDTO: AuthEmailLoginDto) {
    return this.service.validateLogin(loginDTO, true);
  }

  @Public()
  @Post("email/register")
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: AuthRegisterLoginDto) {
    return this.service.register(createUserDto);
  }

  @Public()
  @Post("email/confirm")
  @HttpCode(HttpStatus.OK)
  async confirmEmail(@Body() confirmEmailDto: AuthConfirmEmailDto) {
    return this.service.confirmEmail(confirmEmailDto.token);
  }

  @Public()
  @Post("forgot/password")
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() forgotPasswordDto: AuthForgotPasswordDto) {
    return this.service.forgotPassword(forgotPasswordDto.email);
  }

  @Public()
  @Post("reset/password")
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() resetPasswordDto: AuthResetPasswordDto) {
    return this.service.resetPassword(
      resetPasswordDto.token,
      resetPasswordDto.password
    );
  }

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ["me"],
  })
  @Get("me")
  @HttpCode(HttpStatus.OK)
  public async me(@Request() request) {
    return this.service.me(request.user);
  }

  @ApiBearerAuth()
  @SerializeOptions({
    groups: ["me"],
  })
  @Patch("me")
  @HttpCode(HttpStatus.OK)
  public async update(@Request() request, @Body() userDto: AuthUpdateDto) {
    return this.service.update(request.user, userDto);
  }

  @ApiBearerAuth()
  @Delete("me")
  @HttpCode(HttpStatus.OK)
  public async delete(@Request() request) {
    return this.service.softDelete(request.user);
  }
}
