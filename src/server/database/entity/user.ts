import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  license: string;

  @Column({ type: "boolean", default: () => false })
  isWhitelisted: boolean;

  @Column({ type: "boolean", default: () => false })
  isBanned: boolean;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: string;

}