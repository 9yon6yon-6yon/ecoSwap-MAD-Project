import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Blog } from "./blog.model";
import * as bcrypt from 'bcrypt';
import { IsEmail } from "class-validator";
@Entity('users')
@Unique(['email']) 
export class Users {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;
    @IsEmail()
    @Column('varchar', { length: 50, name: 'email', nullable: false, unique: true  })
    email: string;
    @Column('varchar', { length: 255, name: 'password', nullable: false })
    password: string;
    @OneToMany(() => Blog, blog => blog.user)
    readonly blogs?: Blog[];
    
    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
      }
    
      async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
      }
}