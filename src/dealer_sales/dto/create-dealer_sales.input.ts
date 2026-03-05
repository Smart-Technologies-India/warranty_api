import { InputType, Field, Int } from '@nestjs/graphql';
import { IsDate, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDealerSalesInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  product_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  dealer_purch_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  dealer_seller_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  company_id: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  quantity: number;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  warranty_till: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  batch_number: string;

  @IsNotEmpty()
  @IsDate()
  @Field(() => Date, { nullable: true })
  sale_date?: Date;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}