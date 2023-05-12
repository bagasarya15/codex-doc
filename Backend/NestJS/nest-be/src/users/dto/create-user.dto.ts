import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  username: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  password: any;

  @IsNotEmpty({ message: 'Firstname tidak boleh kosong' })
  firstname: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  lastname: string;
}
