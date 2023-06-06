import { IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  iduser: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
