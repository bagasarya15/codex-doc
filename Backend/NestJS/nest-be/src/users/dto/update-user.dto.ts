import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto {
  @IsNotEmpty({ message: 'Username tidak boleh kosong' })
  username: string;

//   @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  password: any;

  @IsNotEmpty({ message: 'Firstname tidak boleh kosong' })
  firstname: string;

  @IsNotEmpty({ message: 'Password tidak boleh kosong' })
  lastname: string;

  @IsNotEmpty({ message: 'Role tidak boleh kosong' })
  role_id: any;
}
