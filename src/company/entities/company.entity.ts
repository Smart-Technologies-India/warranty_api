import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Zone } from 'src/zone/entities/zone.entity';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  logo: string;

  @Field(() => String)
  contact1: string;

  @Field(() => String, { nullable: true })
  contact2?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Boolean)
  is_dealer: boolean;

  @Field(() => Zone)
  zone: Zone;

  @Field(() => Int)
  zone_id: number;

  @Field(() => String, { nullable: true })
  email: string;

  @Field(() => String, { nullable: true })
  pan: string;

  @Field(() => String, { nullable: true })
  gst: string;

  @Field(() => String, { nullable: true })
  website: string;

  @Field(() => String)
  contact_person: string;

  @Field(() => String)
  contact_person_number: string;

  @Field(() => String, { nullable: true })
  designation: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;
}
