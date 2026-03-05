import { InputType, Int, Field } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateCompanyInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  logo: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  contact1: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  contact2: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  address: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  zone_id: number;

  @IsNotEmpty()
  @IsBoolean()
  @Field(() => Boolean)
  is_dealer: boolean;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  email: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  pan: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  gst: string;

  @IsOptional()
  @IsString()
  @Field(() => String, {
    nullable: true,
  })
  website: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  contact_person: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  contact_person_number: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  designation: string;

  @IsOptional()
  @IsEnum(Status)
  @Field(() => Status, {
    nullable: true,
  })
  status: Status;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  createdById: number;
}
