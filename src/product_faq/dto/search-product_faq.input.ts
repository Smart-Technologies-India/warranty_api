import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateProductFaqInput } from './create-product_faq.input';

@InputType()
export class WhereProductFaqSearchInput extends PartialType(
  CreateProductFaqInput,
) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  product_id?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  question?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  answer?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  priority?: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;
}
