import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  // @IsNotEmpty()
  @IsString()
  name: string;

  // @IsNotEmpty()
  @IsString()
  description: string;

  // @IsNotEmpty()
  category_id: number;

  // @IsNotEmpty()
  price: string;

  image: string;
}

// export class file {
//     @IsNotEmpty()
//     image: any
// }
