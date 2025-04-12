import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GoodsModule } from './goods/goods.module';

@Module({
  imports: [UserModule, GoodsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
