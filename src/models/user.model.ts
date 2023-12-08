import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { IsEmail } from "class-validator";
import { Listing } from "./listing.model";
import { Feedback } from "./feedback.model";
@Entity('users')
@Unique(['email'])
export class Users {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id?: number;
  @Column('varchar', { length: 50, name: 'name', nullable: false })
  name: string;
  @IsEmail()
  @Column('varchar', { length: 50, name: 'email', nullable: false, unique: true })
  email: string;
  @Column('varchar', { length: 255, name: 'password', nullable: false })
  password: string;
  @OneToMany(() => Listing, listing => listing.user)
  readonly listings?: Listing[];
  @OneToMany(() => Feedback, feedback => feedback.listing)
  readonly feedback?: Feedback[];


  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}