import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { TicketStatus, Priority } from '@prisma/client';
import { Product } from 'src/product/entities/product.entity';
import { Sales } from 'src/sales/entities/sales.entity';
import { TicketLevels } from 'src/ticket_levels/entities/ticket_levels.entity';
import { User } from 'src/user/entities/user.entity';

registerEnumType(TicketStatus, {
  name: 'TicketStatus',
});

registerEnumType(Priority, {
  name: 'Priority',
});

@ObjectType()
export class Ticket {
  @Field(() => Int)
  id: number;

  @Field(() => Date, { nullable: true })
  resolved_at?: Date;

  @Field(() => String)
  ticket_number: string;

  @Field(() => Product)
  product: Product;

  @Field(() => Int)
  product_id: number;

  @Field(() => User)
  customer: User;

  @Field(() => Int)
  customer_id: number;

  @Field(() => Sales)
  sale: Sales;

  @Field(() => Int)
  sale_id: number;

  @Field(() => String)
  issue_description: string;

  @Field(() => String)
  issue_category: string;

  @Field(() => String)
  preferred_contact_time: string;

  @Field(() => String, { nullable: true })
  diagnostic_notes?: string;

  @Field(() => String, { nullable: true })
  resolution_notes?: string;

  @Field(() => String)
  priority: string;

  @Field(() => String)
  status: string;

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

  @Field(() => Date, { nullable: true })
  deletedAt?: Date;

  @Field(() => Int, { nullable: true })
  deletedById?: number;

  @Field(() => User, { nullable: true })
  deletedBy?: User;

  @Field(() => [TicketLevels], { nullable: true })
  ticket_levels?: TicketLevels[];
}
