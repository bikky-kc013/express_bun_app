import { UserRole } from "@/domain/enums";
import { IsDate, IsEmail, IsEnum, IsNumber, IsString } from "class-validator";

export class UserResposeDto {
  @IsNumber()
  id: number;

  @IsString()
  username: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsEnum(UserRole)
  role: string;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
