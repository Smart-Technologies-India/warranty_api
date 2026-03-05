import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Company } from 'src/company/entities/company.entity';
import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@ObjectType()
export class ManfStock {
  @Field(() => Int)
  id: number;

  @Field(() => Product)
  product: Product;

  @Field(() => Int)
  product_id: number;

  @Field(() => Company)
  company: Company;

  @Field(() => Int)
  company_id: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => String)
  batch_number: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Int)
  createdById: number;

  @Field(() => User)
  createdBy: User;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  updatedById?: number;

  @Field(() => User, { nullable: true })
  updatedBy?: User;
}
