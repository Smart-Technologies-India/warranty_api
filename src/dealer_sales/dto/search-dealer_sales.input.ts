import { IsDate, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateDealerSalesInput } from './create-dealer_sales.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class WhereDealerSalesSearchInput extends PartialType(CreateDealerSalesInput) {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    id?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    product_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealer_purch_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealer_seller_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    company_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    quantity?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    warranty_till?: number;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    batch_number?: string;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    sale_date?: Date;

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
}