import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository,Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly user: Repository<User>) { }
  create(createUserDto: CreateUserDto) {
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
