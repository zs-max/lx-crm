import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import * as session from 'express-session';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableVersioning({
    type:VersioningType.URI
  })
  app.use(session({secret:"Lek",name:"lek.session",rolling:true})) 
  const options =  new DocumentBuilder()
                       .addBearerAuth()
                       .setTitle("lx-crm接口文档")
                       .setDescription("后台接口相关API")
                       .setVersion("1")
                       .build()
  const document = SwaggerModule.createDocument(app,options)
  SwaggerModule.setup('/api-docs',app,document)                     
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
