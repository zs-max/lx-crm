import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, OneToMany} from 'typeorm'
import { Tags } from './tags.entity'


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({nullable:true})
    age:number

    @Column({nullable:true})
    tel:string

    @Column({nullable:true})
    address:string
    
    @CreateDateColumn({type:"timestamp"})
    createTime:Date
    
    @OneToMany(()=>Tags,(tags) => tags.userId)
    tags:Tags[]
}
