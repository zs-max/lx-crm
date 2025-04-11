# nestjs的基本使用


### 常用命令
- nest --help  可以查看nestjs所有的命令

#### 案例：生成一个用户模块
- 生成controller.ts   nest g co user
- 生成  module.ts  nest g mo user
- 生成service.ts  nest g s user

这种方式太慢，直接一个命令生成CURD
 nest g resource xiaoman

### restful风格
#### 接口设计
get/post/put patch/delete
#### 版本控制
 - URI Versioning  版本将在请求的 URI 中传递（默认）
 - Header Versioning  自定义请求标头将指定版本
 - Media Type Versioning   请求的Accept标头将指定版本