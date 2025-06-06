import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, ManyToOne,JoinColumn} from 'typeorm'
import { User } from './user.entity'


@Entity()
export class Tags {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @ManyToOne(()=>User,(user)=>user.tags)
    @JoinColumn({name:"userId"})
    userId:number
}
