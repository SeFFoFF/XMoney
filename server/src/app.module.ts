import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './components/user/user.module';
import { AuthModule } from './components/auth/auth.module';
// import configuration from './config/configuration';

@Module({
  imports: [
    // MongooseModule.forRoot(
    //   `mongodb+srv://admin:${'admin'}@cluster0.vqvyxhm.mongodb.net/?retryWrites=true&w=majority`,
    // ),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
