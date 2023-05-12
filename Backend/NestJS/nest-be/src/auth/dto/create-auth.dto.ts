import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
