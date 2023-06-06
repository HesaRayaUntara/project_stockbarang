import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from 'src/my/dto/login.dto';
import { Login } from 'src/my/entity/my/login_entity';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(Login)
    private loginRepository: Repository<Login>,
  ) {}

  // async login(email: string, password: string): Promise<Login> {
  //   const login = await this.loginRepository.findOne({ where: { email } });

  //   if (!login || login.password !== password) {
  //     throw new UnauthorizedException('Invalid email or password');
  //   }

  //   return login;
  // }

  async validateUser(email: string): Promise<Login> {
    const login = await this.loginRepository.findOne({ where: { email } });

    if (!login) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return login;
  }

  create(login: Login): Promise<Login> {
    return this.loginRepository.save(login);
  }

  findAll(): Promise<Login[]> {
    return this.loginRepository.find();
  }
}
