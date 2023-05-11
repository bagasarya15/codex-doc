import { PartialType } from '@nestjs/mapped-types';
import { CreateProdCatDtoDto } from './create-prod-cat-dto.dto';

export class UpdateProdCatDtoDto extends PartialType(CreateProdCatDtoDto) {}
