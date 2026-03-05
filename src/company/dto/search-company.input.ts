import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateCompanyInput } from './create-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class WhereCompanySearchInput extends PartialType(CreateCompanyInput) {
  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  id?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  name?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  logo?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact1?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact2?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  address?: string;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  zone_id?: number;

  @IsOptional()
  @IsBoolean()
  @Field(() => Boolean, { nullable: true })
  is_dealer?: boolean;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  pan?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  gst?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  website?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact_person?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  contact_person_number?: string;

  @IsOptional()
  @IsString()
  @Field(() => String, { nullable: true })
  designation?: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, { nullable: true })
  status?: Status;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  createdById?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  updatedById?: number;

  @IsOptional()
  @IsDate()
  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @IsOptional()
  @IsInt()
  @Field(() => Int, { nullable: true })
  deletedById?: number;
}
