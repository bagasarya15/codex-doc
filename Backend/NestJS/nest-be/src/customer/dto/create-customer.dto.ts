import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'Firstname tidak boleh kosong' })
  firstname: string;

  @IsNotEmpty({ message: 'Lastname tidak boleh kosong' })
  lastname: string;
}
