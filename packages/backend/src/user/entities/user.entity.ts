import {Entity,Column,PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'


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
    
}
