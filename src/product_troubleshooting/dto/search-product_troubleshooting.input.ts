import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateProductTroubleshootingInput } from './create-product_troubleshooting.input';

@InputType()
export class WhereProductTroubleshootingSearchInput extends PartialType(
  CreateProductTroubleshootingInput,
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
  issue?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  solution?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  priority?: number;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;
}
