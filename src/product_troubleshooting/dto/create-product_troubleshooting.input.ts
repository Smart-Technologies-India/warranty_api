import { InputType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateProductTroubleshootingInput {
  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  product_id: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  issue: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  solution: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  priority: number;

  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;
}
