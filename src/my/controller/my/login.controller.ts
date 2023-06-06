import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Req, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginService } from '../../service/my/login.service';
import { LoginDto } from 'src/my/dto/login.dto';
// import { JwtAuthGuard } from 'src/guards/auth.guard';
import { Request, Response } from 'express';

@Controller()
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private readonly jwtService: JwtService,
  ) {}

  // @Post('login')
  // async login(@Body() loginDto: LoginDto) {
  //   const { email, password } = loginDto;

  //   const user = await this.loginService.login(email, password);
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid email or password');
  //   }

  //   const token = this.jwtService.sign({ email: user.email });
  //   return { token };
  // }

  // @Get()
  // @UseGuards(JwtAuthGuard)
  // home(@Req() req: Request) {
  //   // Jika autentikasi berhasil, akses ke halaman utama
  // }

  // @Get('masuk')
  // @UseGuards(JwtAuthGuard)
  // masuk(@Req() req: Request) {
  //   // Jika autentikasi berhasil, akses ke halaman masuk
  // }

  // @Get('keluar')
  // @UseGuards(JwtAuthGuard)
  // keluar(@Req() req: Request) {
  //   // Jika autentikasi berhasil, akses ke halaman keluar
  //   return 'http://localhost:3700/keluar';
  // }

  // @Get('supplier')
  // @UseGuards(JwtAuthGuard)
  // supplier(@Req() req: Request) {
  //   // Jika autentikasi berhasil, akses ke halaman supplier
  //   return 'http://localhost:3700/supplier';
  // }

  @Get('login')
  loginPage(@Req() req: Request, @Res() res: Response) {
    // Render halaman login
    res.render('login');
  }
}
