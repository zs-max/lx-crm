import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 在这里配置了版本在请求URI中传递
  // app.enableVersioning({
  //   type:VersioningType.URI
  // })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
