import { InputType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateManfStockInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  company_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  product_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  batch_number: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
