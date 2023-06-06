import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { LoginController } from 'src/my/controller/my/login.controller';
import { Login } from 'src/my/entity/my/login_entity';
import { LoginService } from 'src/my/service/my/login.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from '../strategies/jwt.strategy'; // Ubah path sesuai dengan struktur folder Anda

@Module({
  imports: [
    TypeOrmModule.forFeature([Login]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET || 'mySecretKey123!@#',
        // signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy],
})
export class LoginModule {}
