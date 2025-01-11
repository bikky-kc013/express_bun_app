import type { CreateUserDto, UserResposeDto } from "@/application/dtos/userDto";

export interface IUserService {
  createUser(data: CreateUserDto): Promise<UserResposeDto>;
  getUserById(id: string): Promise<UserResposeDto>;
  getAllUsers(): Promise<UserResposeDto[]>;
  updateUser(data: CreateUserDto): Promise<UserResposeDto>;
  deleteUser(id: string): Promise<void>;
}
