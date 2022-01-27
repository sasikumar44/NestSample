import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity ('users')
export class Users {
    @PrimaryColumn()
    email:string;

    @Column()
    name:string;

    @Column()
    password:string
}