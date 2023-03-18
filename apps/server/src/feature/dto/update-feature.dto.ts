import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateFeatureDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateFeatureDtoParams {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  projectId: string;
}
