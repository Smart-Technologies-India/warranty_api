import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { Product } from 'src/product/entities/product.entity';

@ObjectType()
export class ProductTroubleshooting {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  product_id: number;

  @Field(() => Product)
  product: Product;

  @Field(() => String)
  issue: string;

  @Field(() => String)
  solution: string;

  @Field(() => Status)
  status: Status;

  @Field(() => Int)
  priority: number;
}
