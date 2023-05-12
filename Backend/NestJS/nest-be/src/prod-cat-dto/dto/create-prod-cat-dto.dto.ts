import { IsNotEmpty, IsEmpty } from 'class-validator';

export class CreateProdCatDtoDto {
  @IsNotEmpty({ message: 'Nama kategori tidak boleh kosong!' })
  name: string;

  @IsNotEmpty({ message: 'Description kategori tidak boleh kosong' })
  description: string;
}
