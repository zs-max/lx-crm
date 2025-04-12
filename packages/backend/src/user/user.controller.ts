import { Controller, Get, Post, Body, Patch, Param, Delete,Request, Query,Headers, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // --------------------------状态码-------------------
  // 使用 HttpCode 装饰器 控制接口返回的状态码 
  // @Get(':id')
  // @HttpCode(500)
  // findId (@Headers() header) {
  //   console.log(header)
  //   return {
  //       code:200
  //   }
  // }


  // ------------------------读取header信息------------------
  // 可以通过这个注解拿到header的信息
  // @Get(':id')
  // findId (@Headers() header) {
  //   console.log(header)
  //   return {
  //      code:200
  //   }
  // }

  // -------------------------动态路由------------------------

  // @Get(':id')
  // findId (@Request() req) {
  //   console.log(req)
  //   return {
  //      code:200
  //   }
  // }

  // @Get(':id')
  // findId (@Param() param) {
  //   console.log(param.id)
  //   return {
  //      code:200
  //   }
  // }


  //---------------------------get获取参数------------------------
  // 通过@Request()获取请求头信息
  // @Get('getOne')
  // find(@Request() req){
  //   console.log(req) 
  //   return {
  //     code:200
  //   }
  // }

  // 直接通过@query获取query 
  // @Get('getOne')
  // find(@Query() query){
  //   console.log(query) 
  //   return {
  //     code:200
  //   }
  // }

  //----------------post获取参数-------------------------------------- 
  // 通过@Request()获取请求头信息
  // @Post()
  // create(@Request() req) {
  //   console.log(req)
  //   return {
  //     code:200
  //   }
  // }

  // 直接通过@body获取传过来的对象,也可以通过这种方式@body('name')获取指定key的值
  // @Post()
  // create(@Body('name') body) {
  //   console.log(body)
  //   return {
  //     code:200
  //   }
  // }

 
  // -----------------下面是生成的curd---------------------------------
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
