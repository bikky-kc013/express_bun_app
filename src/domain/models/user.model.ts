import type { UserRole } from "../enums/userRole.enum";
import type { BaseAbstractModel } from "./base.model";

export interface IUserModel extends BaseAbstractModel {
  username: string;
  email: string;
  password: string;
  role: UserRole;
}
