import { UserRole } from "@/domain/enums";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
  Max,
  Min,
  ValidateIf,
} from "class-validator";

export class CreateUserDto {
  @IsEmail({}, { message: "Invalid email" })
  email: string;

  @IsOptional()
  @IsString()
  @Max(32, { message: "Username is too long" })
  @Min(3, { message: "Username is too short" })
  username: string;

  @IsStrongPassword()
  @IsString()
  @Max(32, { message: "Password is too long" })
  @Min(8, { message: "Password is too short" })
  password: string;

  @IsEnum(UserRole, { message: "Invalid role" })
  @IsString()
  role: string;
}
