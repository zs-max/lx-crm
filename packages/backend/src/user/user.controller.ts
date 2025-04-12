import { Controller, Get, Post, Body, Patch, Param, Delete,Request, Query,Headers, HttpCode, Req ,Res} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @Post('/add/tags')
  addTags(@Body() params:{tags:string[],userId:number}){
    return this.userService.addTags(params)
  }
 

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto,'0000')
    return this.userService.create(createUserDto);
  }
 
  @Get()
  findAll(@Query() query:{keyWord:string,page:number,pageSize:number}) {
    const { keyWord = '', page = 1, pageSize = 10 } = query;
    return this.userService.findAll({ keyWord, page, pageSize } );
  }
 
 
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }






  /**
   * 获取验证码
   * @param req 
   * @param res 
   */
  @Get('code')
  createCaptcha(@Req() req,@Res() res){
     const captcha = svgCaptcha.create({
        size:4, //验证码位数
        fontSize:50, //验证码大小
        width:100,
        height:34,
        background:'#cc9966'
     })
     req.session.code = captcha.text
     res.type('image/svg+xml')
     res.send(captcha.data)
  }


  /**
   *  
   * @param req 
   * @param body 
   */
  @Post('create')
  createUser(@Req() req,@Body() body){
    console.log(req.session.code, body)
    if (req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()) {
      return {
        message: "验证码正确"
      }
    } else {
      return {
        message: "验证码错误"
      }
    }
  }
}
