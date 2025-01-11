import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import type { IUserModel } from "@/domain/models";
import { UserRole } from "@/domain/enums";

@Entity()
export class UserEntity implements IUserModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 255,
  })
  username: string;

  @Index({ unique: true })
  @Column({
    type: "varchar",
    length: 255,
    unique: true,
  })
  email: string;

  @Index()
  @Column({
    type: "varchar",
    length: 255,
  })
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @CreateDateColumn()
  updatedAt: Date;

  @UpdateDateColumn()
  createdAt: Date;
}
