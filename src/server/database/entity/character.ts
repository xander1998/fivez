import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("characters")
export class Character {

  @PrimaryGeneratedColumn("increment")
  id: number

  @Column("text")
  name: string;

  @Column("bigint")
  xp: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  deletedAt: string;

}