import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('users')
export class Users {
  @PrimaryColumn()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;
  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, Number(10000));
  }
}
