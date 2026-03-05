import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateManfStockInput } from './create-manf_stock.input';

@InputType()
export class WhereManfStockSearchInput extends PartialType(
  CreateManfStockInput,
) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  company_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  product_id?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  quantity?: number;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  batch_number?: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  createdById?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;
}
