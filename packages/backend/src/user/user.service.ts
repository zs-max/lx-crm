import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository,Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Tags } from './entities/tags.entity';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly user: Repository<User>,@InjectRepository(Tags) private readonly tags: Repository<Tags>) { }

  async addTags(params:{tags:string[],userId:number}){
    const userInfo = await this.user.findOne({where:{id:params.userId}})

    console.log(userInfo,11,params.tags)
    const tagList:Tags[] = []
    if (!userInfo) {
      throw new Error('User not found');
    }
    for (const item of params.tags) {
      const T =  new Tags()
      T.name = item;
      T.userId = userInfo.id
      await this.tags.save(T)
      tagList.push(T)  
    }
    userInfo.tags = tagList
    return this.user.save(userInfo)
  }


  async create(createUserDto: CreateUserDto) {
    const data = new User()
    data.name = createUserDto.name
    data.address = createUserDto.address
    return this.user.save(data)
  }

  async findAll(query: { keyWord: string; page: number; pageSize: number; }) {
    const data = await this.user.find({
      where: {
        name: Like(`%${query.keyWord}%`)
      },
      order: {
        id: "DESC"
      },
      skip: (query.page - 1)* query.pageSize,
      take: query.pageSize,
      relations:['tags']
    })
    const total = await this.user.count({
      where: {
        name: Like(`%${query.keyWord}%`)
      },
    })
    return {
      data,
      total
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.user.update(id,updateUserDto)
  }

  remove(id: number) {
    return this.user.delete(id)
  }
}
