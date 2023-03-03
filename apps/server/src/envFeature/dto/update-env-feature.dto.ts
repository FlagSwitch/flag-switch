import { IsNotEmpty, IsUUID, IsBoolean } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateEnvFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  readonly state: boolean;
}

export class UpdateEnvFeatureDtoParams {
  @ApiProperty()
  @IsUUID()
  id: string;
}
