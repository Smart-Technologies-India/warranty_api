
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Priority {
    HIGH = "HIGH",
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    URGENT = "URGENT"
}

export enum Role {
    ACCOUNTS = "ACCOUNTS",
    ADMIN = "ADMIN",
    DEALER_ACCOUNTS = "DEALER_ACCOUNTS",
    DEALER_ADMIN = "DEALER_ADMIN",
    DEALER_MANAGER = "DEALER_MANAGER",
    DEALER_SALES = "DEALER_SALES",
    MANUF_ACCOUNTS = "MANUF_ACCOUNTS",
    MANUF_ADMIN = "MANUF_ADMIN",
    MANUF_MANAGER = "MANUF_MANAGER",
    MANUF_SALES = "MANUF_SALES",
    MANUF_TECHNICAL = "MANUF_TECHNICAL",
    MANUF_TECH_EXPERT = "MANUF_TECH_EXPERT",
    MANUF_TECH_GEN = "MANUF_TECH_GEN",
    MANUF_TECH_MANAGER = "MANUF_TECH_MANAGER",
    SALES = "SALES",
    SYSTEM = "SYSTEM",
    TECHNICAL = "TECHNICAL",
    USER = "USER"
}

export enum Status {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}

export enum TicketStatus {
    CLOSED = "CLOSED",
    IN_PROGRESS = "IN_PROGRESS",
    OPEN = "OPEN",
    RESOLVED = "RESOLVED"
}

export interface CreateCityInput {
    name: string;
}

export interface CreateCompanyInput {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    contact_person: string;
    contact_person_number: string;
    createdById: number;
    designation: string;
    email?: Nullable<string>;
    gst?: Nullable<string>;
    is_dealer: boolean;
    logo: string;
    name: string;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    website?: Nullable<string>;
    zone_id: number;
}

export interface CreateCustomerFeedbackTicketInput {
    comments?: Nullable<string>;
    createdById: number;
    rating: number;
    ticket_id: number;
}

export interface CreateDealerSalesInput {
    batch_number: string;
    company_id: number;
    createdById: number;
    dealer_purch_id: number;
    dealer_seller_id: number;
    product_id: number;
    quantity: number;
    sale_date?: Nullable<DateTime>;
    warranty_till: number;
}

export interface CreateDealerStockInput {
    batch_number: string;
    company_id: number;
    createdById: number;
    dealer_id: number;
    product_id: number;
    quantity: number;
    status?: Nullable<Status>;
}

export interface CreateManfStockInput {
    batch_number: string;
    company_id: number;
    createdById: number;
    product_id: number;
    quantity: number;
    status?: Nullable<Status>;
}

export interface CreateProductCategoryInput {
    createdById: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    status?: Nullable<Status>;
}

export interface CreateProductFaqInput {
    answer: string;
    priority: number;
    product_id: number;
    question: string;
    status?: Nullable<Status>;
}

export interface CreateProductInput {
    company_id: number;
    createdById: number;
    description?: Nullable<string>;
    image?: Nullable<string>;
    name: string;
    price: number;
    status?: Nullable<Status>;
    subcategory_id: number;
    warranty_time: number;
}

export interface CreateProductSubcategoryInput {
    createdById: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    product_category_id: number;
    status?: Nullable<Status>;
}

export interface CreateProductTroubleshootingInput {
    issue: string;
    priority: number;
    product_id: number;
    solution: string;
    status?: Nullable<Status>;
}

export interface CreateSalesInput {
    company_id: number;
    createdById: number;
    customer_id: number;
    dealer_id: number;
    product_id: number;
    warranty_till: number;
}

export interface CreateTicketAttachmentsInput {
    createdById: number;
    file_path: string;
    ticket_id: number;
    type?: Nullable<string>;
}

export interface CreateTicketInput {
    createdById: number;
    customer_id: number;
    diagnostic_notes?: Nullable<string>;
    issue_category: string;
    issue_description: string;
    preferred_contact_time: string;
    priority?: Nullable<Priority>;
    product_id: number;
    resolution_notes?: Nullable<string>;
    sale_id: number;
    status?: Nullable<TicketStatus>;
    ticket_number: string;
}

export interface CreateTicketLevelsInput {
    approval_notes?: Nullable<string>;
    approval_required: boolean;
    approved_by_id?: Nullable<number>;
    assigned_to_id: number;
    createdById: number;
    diagnostic_notes?: Nullable<string>;
    level: number;
    resolution_notes?: Nullable<string>;
    ticket_id: number;
}

export interface CreateUserCompanyInput {
    company_id: number;
    createdById: number;
    status?: Nullable<Status>;
    user_id: number;
}

export interface CreateUserInput {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    is_dealer: boolean;
    is_manufacturer: boolean;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    zone_id: number;
}

export interface CreateZoneInput {
    city_id: number;
    name: string;
}

export interface LoginUserInput {
    contact: string;
    password: string;
}

export interface SearchPaginationInput {
    search?: Nullable<string>;
    skip: number;
    take: number;
}

export interface SignUpUserInput {
    mobile: string;
    name: string;
    password: string;
}

export interface UpdateCityInput {
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateCompanyInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    contact_number?: Nullable<string>;
    contact_person?: Nullable<string>;
    contact_person_number?: Nullable<string>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    designation?: Nullable<string>;
    email?: Nullable<string>;
    gst?: Nullable<string>;
    is_dealer?: Nullable<boolean>;
    logo?: Nullable<string>;
    name?: Nullable<string>;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    website?: Nullable<string>;
    zone_id?: Nullable<number>;
}

export interface UpdateCustomerFeedbackTicketInput {
    comments?: Nullable<string>;
    createdById?: Nullable<number>;
    rating?: Nullable<number>;
    ticket_id?: Nullable<number>;
    updatedById?: Nullable<number>;
}

export interface UpdateDealerSalesInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    dealer_purch_id?: Nullable<number>;
    dealer_seller_id?: Nullable<number>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    sale_date?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface UpdateDealerStockInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    dealer_id?: Nullable<number>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface UpdateManfStockInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    updatedById?: Nullable<number>;
}

export interface UpdateProductCategoryInput {
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface UpdateProductFaqInput {
    answer?: Nullable<string>;
    priority?: Nullable<number>;
    product_id?: Nullable<number>;
    question?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateProductInput {
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    description?: Nullable<string>;
    image?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    status?: Nullable<Status>;
    subcategory_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_time?: Nullable<number>;
}

export interface UpdateProductSubcategoryInput {
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    product_category_id?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface UpdateProductTroubleshootingInput {
    issue?: Nullable<string>;
    priority?: Nullable<number>;
    product_id?: Nullable<number>;
    solution?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface UpdateSalesInput {
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    customer_id?: Nullable<number>;
    dealer_id?: Nullable<number>;
    product_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface UpdateTicketAttachmentsInput {
    createdById?: Nullable<number>;
    file_path?: Nullable<string>;
    ticket_id?: Nullable<number>;
    type?: Nullable<string>;
    updatedById?: Nullable<number>;
}

export interface UpdateTicketInput {
    createdById?: Nullable<number>;
    customer_id?: Nullable<number>;
    diagnostic_notes?: Nullable<string>;
    issue_category?: Nullable<string>;
    issue_description?: Nullable<string>;
    preferred_contact_time?: Nullable<string>;
    priority?: Nullable<Priority>;
    product_id?: Nullable<number>;
    resolution_notes?: Nullable<string>;
    resolved_at?: Nullable<DateTime>;
    sale_id?: Nullable<number>;
    status?: Nullable<TicketStatus>;
    ticket_number?: Nullable<string>;
    updatedById?: Nullable<number>;
}

export interface UpdateTicketLevelsInput {
    approval_notes?: Nullable<string>;
    approval_required?: Nullable<boolean>;
    approved_by_id?: Nullable<number>;
    assigned_to_id?: Nullable<number>;
    createdById?: Nullable<number>;
    diagnostic_notes?: Nullable<string>;
    level?: Nullable<number>;
    resolution_notes?: Nullable<string>;
    ticket_id?: Nullable<number>;
    updatedById?: Nullable<number>;
}

export interface UpdateUserCompanyInput {
    company_id: number;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    user_id: number;
}

export interface UpdateUserInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    is_dealer?: Nullable<boolean>;
    is_manufacturer?: Nullable<boolean>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    zone_id?: Nullable<number>;
}

export interface UpdateZoneInput {
    city_id?: Nullable<number>;
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface WhereCitySearchInput {
    id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface WhereCompanySearchInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    contact_person?: Nullable<string>;
    contact_person_number?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    designation?: Nullable<string>;
    email?: Nullable<string>;
    gst?: Nullable<string>;
    id?: Nullable<string>;
    is_dealer?: Nullable<boolean>;
    logo?: Nullable<string>;
    name?: Nullable<string>;
    pan?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    website?: Nullable<string>;
    zone_id?: Nullable<number>;
}

export interface WhereCustomerFeedbackTicketSearchInput {
    comments?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    id?: Nullable<string>;
    rating?: Nullable<number>;
    status?: Nullable<string>;
    ticket_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereDealerSalesSearchInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    dealer_purch_id?: Nullable<number>;
    dealer_seller_id?: Nullable<number>;
    id?: Nullable<string>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    sale_date?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface WhereDealerStockSearchInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    dealer_id?: Nullable<number>;
    id?: Nullable<string>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereManfStockSearchInput {
    batch_number?: Nullable<string>;
    company_id?: Nullable<number>;
    createdById?: Nullable<number>;
    id?: Nullable<string>;
    product_id?: Nullable<number>;
    quantity?: Nullable<number>;
    status?: Nullable<Status>;
    updatedById?: Nullable<number>;
}

export interface WhereProductCategorySearchInput {
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereProductFaqSearchInput {
    answer?: Nullable<string>;
    id?: Nullable<string>;
    priority?: Nullable<number>;
    product_id?: Nullable<number>;
    question?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface WhereProductSearchInput {
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    image?: Nullable<string>;
    name?: Nullable<string>;
    price?: Nullable<number>;
    status?: Nullable<Status>;
    subcategory_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_time?: Nullable<number>;
}

export interface WhereProductSubcategorySearchInput {
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    pic?: Nullable<string>;
    priority?: Nullable<number>;
    product_category_id?: Nullable<number>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereProductTroubleshootingSearchInput {
    id?: Nullable<string>;
    issue?: Nullable<string>;
    priority?: Nullable<number>;
    product_id?: Nullable<number>;
    solution?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface WhereSalesSearchInput {
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    customer_id?: Nullable<number>;
    dealer_id?: Nullable<number>;
    id?: Nullable<string>;
    product?: Nullable<WhereProductSearchInput>;
    product_id?: Nullable<number>;
    sale_date?: Nullable<DateTime>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    warranty_till?: Nullable<number>;
}

export interface WhereTicketAttachmentsSearchInput {
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    file_path?: Nullable<string>;
    id?: Nullable<string>;
    status?: Nullable<string>;
    ticket_id?: Nullable<number>;
    type?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereTicketLevelsSearchInput {
    approval_notes?: Nullable<string>;
    approval_required?: Nullable<boolean>;
    approved_by_id?: Nullable<number>;
    assigned_to_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    diagnostic_notes?: Nullable<string>;
    id?: Nullable<string>;
    level?: Nullable<number>;
    resolution_notes?: Nullable<string>;
    status?: Nullable<string>;
    ticket_id?: Nullable<number>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereTicketSearchInput {
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    customer_id?: Nullable<number>;
    diagnostic_notes?: Nullable<string>;
    id?: Nullable<string>;
    issue_category?: Nullable<string>;
    issue_description?: Nullable<string>;
    preferred_contact_time?: Nullable<string>;
    priority?: Nullable<Priority>;
    product_id?: Nullable<number>;
    resolution_notes?: Nullable<string>;
    sale?: Nullable<WhereSalesSearchInput>;
    sale_id?: Nullable<number>;
    status?: Nullable<TicketStatus>;
    ticket_number?: Nullable<string>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
}

export interface WhereUserCompanySearchInput {
    company_id?: Nullable<number>;
    createdAt?: Nullable<DateTime>;
    createdById?: Nullable<number>;
    deletedAt?: Nullable<DateTime>;
    deletedById?: Nullable<number>;
    id?: Nullable<string>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    updatedById?: Nullable<number>;
    user_id?: Nullable<number>;
}

export interface WhereUserSearchInput {
    address?: Nullable<string>;
    contact1?: Nullable<string>;
    contact2?: Nullable<string>;
    createdAt?: Nullable<DateTime>;
    deletedAt?: Nullable<DateTime>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    id?: Nullable<string>;
    is_dealer?: Nullable<boolean>;
    is_manufacturer?: Nullable<boolean>;
    name?: Nullable<string>;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role?: Nullable<Role>;
    status?: Nullable<Status>;
    updatedAt?: Nullable<DateTime>;
    zone_id?: Nullable<number>;
}

export interface WhereZoneSearchInput {
    city_id?: Nullable<number>;
    id?: Nullable<string>;
    name?: Nullable<string>;
    status?: Nullable<Status>;
}

export interface City {
    id: number;
    name: string;
    status: Status;
}

export interface CityPagination {
    data: City[];
    skip: number;
    take: number;
    total: number;
}

export interface Company {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    contact_person: string;
    contact_person_number: string;
    createdAt: DateTime;
    deletedAt?: Nullable<DateTime>;
    designation?: Nullable<string>;
    email?: Nullable<string>;
    gst?: Nullable<string>;
    id: number;
    is_dealer: boolean;
    logo: string;
    name: string;
    pan?: Nullable<string>;
    status: Status;
    updatedAt: DateTime;
    website?: Nullable<string>;
    zone: Zone;
    zone_id: number;
}

export interface CompanyPagination {
    data: Company[];
    skip: number;
    take: number;
    total: number;
}

export interface CustomerFeedbackTicket {
    comments?: Nullable<string>;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    rating: number;
    status: Status;
    ticket: Ticket;
    ticket_id: number;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface CustomerFeedbackTicketPagination {
    data: CustomerFeedbackTicket[];
    skip: number;
    take: number;
    total: number;
}

export interface DealerSales {
    batch_number: string;
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    dealer_purch: Company;
    dealer_purch_id: number;
    dealer_seller: Company;
    dealer_seller_id: number;
    id: number;
    product: Product;
    product_id: number;
    quantity: number;
    sale_date: DateTime;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    warranty_till: number;
}

export interface DealerSalesPagination {
    data: DealerSales[];
    skip: number;
    take: number;
    total: number;
}

export interface DealerStock {
    batch_number: string;
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    dealer: Company;
    dealer_id: number;
    id: number;
    product: Product;
    product_id: number;
    quantity: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface DealerStockPagination {
    data: DealerStock[];
    skip: number;
    take: number;
    total: number;
}

export interface ManfStock {
    batch_number: string;
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    id: number;
    product: Product;
    product_id: number;
    quantity: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface ManfStockPagination {
    data: ManfStock[];
    skip: number;
    take: number;
    total: number;
}

export interface IMutation {
    createCity(inputType: CreateCityInput): City | Promise<City>;
    createCompany(inputType: CreateCompanyInput): Company | Promise<Company>;
    createCustomerFeedbackTicket(inputType: CreateCustomerFeedbackTicketInput): CustomerFeedbackTicket | Promise<CustomerFeedbackTicket>;
    createDealerSales(inputType: CreateDealerSalesInput): DealerSales | Promise<DealerSales>;
    createDealerStock(inputType: CreateDealerStockInput): DealerStock | Promise<DealerStock>;
    createManfStock(inputType: CreateManfStockInput): ManfStock | Promise<ManfStock>;
    createProduct(inputType: CreateProductInput): Product | Promise<Product>;
    createProductCategory(inputType: CreateProductCategoryInput): ProductCategory | Promise<ProductCategory>;
    createProductFaq(inputType: CreateProductFaqInput): ProductFaq | Promise<ProductFaq>;
    createProductSubcategory(inputType: CreateProductSubcategoryInput): ProductSubcategory | Promise<ProductSubcategory>;
    createProductTroubleshooting(inputType: CreateProductTroubleshootingInput): ProductTroubleshooting | Promise<ProductTroubleshooting>;
    createSales(inputType: CreateSalesInput): Sales | Promise<Sales>;
    createTicket(inputType: CreateTicketInput): Ticket | Promise<Ticket>;
    createTicketAttachments(inputType: CreateTicketAttachmentsInput): TicketAttachments | Promise<TicketAttachments>;
    createTicketLevels(inputType: CreateTicketLevelsInput): TicketLevels | Promise<TicketLevels>;
    createUser(inputType: CreateUserInput): User | Promise<User>;
    createUserCompany(inputType: CreateUserCompanyInput): UserCompany | Promise<UserCompany>;
    createZone(inputType: CreateZoneInput): Zone | Promise<Zone>;
    deleteCity(id: number, userid: number): City | Promise<City>;
    deleteCompany(id: number, userid: number): Company | Promise<Company>;
    deleteCustomerFeedbackTicket(id: number, userid: number): CustomerFeedbackTicket | Promise<CustomerFeedbackTicket>;
    deleteDealerSales(id: number, userid: number): DealerSales | Promise<DealerSales>;
    deleteDealerStock(id: number, userid: number): DealerStock | Promise<DealerStock>;
    deleteManfStock(id: number, userid: number): ManfStock | Promise<ManfStock>;
    deleteProduct(id: number, userid: number): Product | Promise<Product>;
    deleteProductCategory(id: number, userid: number): ProductCategory | Promise<ProductCategory>;
    deleteProductFaq(id: number, userid: number): ProductFaq | Promise<ProductFaq>;
    deleteProductSubcategory(id: number, userid: number): ProductSubcategory | Promise<ProductSubcategory>;
    deleteProductTroubleshooting(id: number, userid: number): ProductTroubleshooting | Promise<ProductTroubleshooting>;
    deleteSales(id: number, userid: number): Sales | Promise<Sales>;
    deleteTicket(id: number, userid: number): Ticket | Promise<Ticket>;
    deleteTicketAttachments(id: number, userid: number): TicketAttachments | Promise<TicketAttachments>;
    deleteTicketLevels(id: number, userid: number): TicketLevels | Promise<TicketLevels>;
    deleteUser(id: number, userid: number): User | Promise<User>;
    deleteUserCompany(id: number, userid: number): UserCompany | Promise<UserCompany>;
    deleteZone(id: number, userid: number): Zone | Promise<Zone>;
    optLogin(contact: string): User | Promise<User>;
    signup(signUpUserInput: SignUpUserInput): User | Promise<User>;
    updateCity(id: number, updateType: UpdateCityInput): City | Promise<City>;
    updateCompany(id: number, updateType: UpdateCompanyInput): Company | Promise<Company>;
    updateCustomerFeedbackTicket(id: number, updateType: UpdateCustomerFeedbackTicketInput): CustomerFeedbackTicket | Promise<CustomerFeedbackTicket>;
    updateDealerSales(id: number, updateType: UpdateDealerSalesInput): DealerSales | Promise<DealerSales>;
    updateDealerStock(id: number, updateType: UpdateDealerStockInput): DealerStock | Promise<DealerStock>;
    updateManfStock(id: number, updateType: UpdateManfStockInput): ManfStock | Promise<ManfStock>;
    updateProduct(id: number, updateType: UpdateProductInput): Product | Promise<Product>;
    updateProductCategory(id: number, updateType: UpdateProductCategoryInput): ProductCategory | Promise<ProductCategory>;
    updateProductFaq(id: number, updateType: UpdateProductFaqInput): ProductFaq | Promise<ProductFaq>;
    updateProductSubcategory(id: number, updateType: UpdateProductSubcategoryInput): ProductSubcategory | Promise<ProductSubcategory>;
    updateProductTroubleshooting(id: number, updateType: UpdateProductTroubleshootingInput): ProductTroubleshooting | Promise<ProductTroubleshooting>;
    updateSales(id: number, updateType: UpdateSalesInput): Sales | Promise<Sales>;
    updateTicket(id: number, updateType: UpdateTicketInput): Ticket | Promise<Ticket>;
    updateTicketAttachments(id: number, updateType: UpdateTicketAttachmentsInput): TicketAttachments | Promise<TicketAttachments>;
    updateTicketLevels(id: number, updateType: UpdateTicketLevelsInput): TicketLevels | Promise<TicketLevels>;
    updateUser(id: number, updateType: UpdateUserInput): User | Promise<User>;
    updateUserCompany(id: number, updateType: UpdateUserCompanyInput): UserCompany | Promise<UserCompany>;
    updateZone(id: number, updateType: UpdateZoneInput): Zone | Promise<Zone>;
    verifyOtp(contact: string, otp: string): User | Promise<User>;
}

export interface Product {
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    description?: Nullable<string>;
    id: number;
    image?: Nullable<string>;
    name: string;
    price: number;
    status: Status;
    subcategory: ProductSubcategory;
    subcategory_id: number;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    warranty_time: number;
}

export interface ProductCategory {
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface ProductCategoryPagination {
    data: ProductCategory[];
    skip: number;
    take: number;
    total: number;
}

export interface ProductFaq {
    answer: string;
    id: number;
    priority: number;
    product: Product;
    product_id: number;
    question: string;
    status: Status;
}

export interface ProductFaqPagination {
    data: ProductFaq[];
    skip: number;
    take: number;
    total: number;
}

export interface ProductPagination {
    data: Product[];
    skip: number;
    take: number;
    total: number;
}

export interface ProductSubcategory {
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    name: string;
    pic?: Nullable<string>;
    priority: number;
    product_category: ProductCategory;
    product_category_id: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface ProductSubcategoryPagination {
    data: ProductSubcategory[];
    skip: number;
    take: number;
    total: number;
}

export interface ProductTroubleshooting {
    id: number;
    issue: string;
    priority: number;
    product: Product;
    product_id: number;
    solution: string;
    status: Status;
}

export interface ProductTroubleshootingPagination {
    data: ProductTroubleshooting[];
    skip: number;
    take: number;
    total: number;
}

export interface IQuery {
    getAllCity(whereSearchInput: WhereCitySearchInput): City[] | Promise<City[]>;
    getAllCompany(whereSearchInput: WhereCompanySearchInput): Company[] | Promise<Company[]>;
    getAllCustomerFeedbackTicket(whereSearchInput: WhereCustomerFeedbackTicketSearchInput): CustomerFeedbackTicket[] | Promise<CustomerFeedbackTicket[]>;
    getAllDealerSales(whereSearchInput: WhereDealerSalesSearchInput): DealerSales[] | Promise<DealerSales[]>;
    getAllDealerStock(whereSearchInput: WhereDealerStockSearchInput): DealerStock[] | Promise<DealerStock[]>;
    getAllManfStock(whereSearchInput: WhereManfStockSearchInput): ManfStock[] | Promise<ManfStock[]>;
    getAllProduct(whereSearchInput: WhereProductSearchInput): Product[] | Promise<Product[]>;
    getAllProductCategory(whereSearchInput: WhereProductCategorySearchInput): ProductCategory[] | Promise<ProductCategory[]>;
    getAllProductFaq(whereSearchInput: WhereProductFaqSearchInput): ProductFaq[] | Promise<ProductFaq[]>;
    getAllProductSubcategory(whereSearchInput: WhereProductSubcategorySearchInput): ProductSubcategory[] | Promise<ProductSubcategory[]>;
    getAllProductTroubleshooting(whereSearchInput: WhereProductTroubleshootingSearchInput): ProductTroubleshooting[] | Promise<ProductTroubleshooting[]>;
    getAllSales(whereSearchInput: WhereSalesSearchInput): Sales[] | Promise<Sales[]>;
    getAllTicket(whereSearchInput: WhereTicketSearchInput): Ticket[] | Promise<Ticket[]>;
    getAllTicketAttachments(whereSearchInput: WhereTicketAttachmentsSearchInput): TicketAttachments[] | Promise<TicketAttachments[]>;
    getAllTicketLevels(whereSearchInput: WhereTicketLevelsSearchInput): TicketLevels[] | Promise<TicketLevels[]>;
    getAllUser(whereSearchInput: WhereUserSearchInput): User[] | Promise<User[]>;
    getAllUserCompany(whereSearchInput: WhereUserCompanySearchInput): UserCompany[] | Promise<UserCompany[]>;
    getAllZone(whereSearchInput: WhereZoneSearchInput): Zone[] | Promise<Zone[]>;
    getCityById(id: number): City | Promise<City>;
    getCompanyById(id: number): Company | Promise<Company>;
    getCustomerFeedbackTicketById(id: number): CustomerFeedbackTicket | Promise<CustomerFeedbackTicket>;
    getDealerSalesById(id: number): DealerSales | Promise<DealerSales>;
    getDealerStockById(id: number): DealerStock | Promise<DealerStock>;
    getManfStockById(id: number): ManfStock | Promise<ManfStock>;
    getPaginatedCity(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereCitySearchInput): CityPagination | Promise<CityPagination>;
    getPaginatedCompany(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereCompanySearchInput): CompanyPagination | Promise<CompanyPagination>;
    getPaginatedCustomerFeedbackTicket(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereCustomerFeedbackTicketSearchInput): CustomerFeedbackTicketPagination | Promise<CustomerFeedbackTicketPagination>;
    getPaginatedDealerSales(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereDealerSalesSearchInput): DealerSalesPagination | Promise<DealerSalesPagination>;
    getPaginatedDealerStock(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereDealerStockSearchInput): DealerStockPagination | Promise<DealerStockPagination>;
    getPaginatedManfStock(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereManfStockSearchInput): ManfStockPagination | Promise<ManfStockPagination>;
    getPaginatedProduct(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductSearchInput): ProductPagination | Promise<ProductPagination>;
    getPaginatedProductCategory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductCategorySearchInput): ProductCategoryPagination | Promise<ProductCategoryPagination>;
    getPaginatedProductFaq(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductFaqSearchInput): ProductFaqPagination | Promise<ProductFaqPagination>;
    getPaginatedProductSubcategory(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductSubcategorySearchInput): ProductSubcategoryPagination | Promise<ProductSubcategoryPagination>;
    getPaginatedProductTroubleshooting(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereProductTroubleshootingSearchInput): ProductTroubleshootingPagination | Promise<ProductTroubleshootingPagination>;
    getPaginatedSales(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereSalesSearchInput): SalesPagination | Promise<SalesPagination>;
    getPaginatedTicket(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereTicketSearchInput): TicketPagination | Promise<TicketPagination>;
    getPaginatedTicketAttachments(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereTicketAttachmentsSearchInput): TicketAttachmentsPagination | Promise<TicketAttachmentsPagination>;
    getPaginatedTicketLevels(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereTicketLevelsSearchInput): TicketLevelsPagination | Promise<TicketLevelsPagination>;
    getPaginatedUser(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserSearchInput): UserPagination | Promise<UserPagination>;
    getPaginatedUserCompany(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereUserCompanySearchInput): UserCompanyPagination | Promise<UserCompanyPagination>;
    getPaginatedZone(searchPaginationInput: SearchPaginationInput, whereSearchInput: WhereZoneSearchInput): ZonePagination | Promise<ZonePagination>;
    getProductById(id: number): Product | Promise<Product>;
    getProductCategoryById(id: number): ProductCategory | Promise<ProductCategory>;
    getProductFaqById(id: number): ProductFaq | Promise<ProductFaq>;
    getProductSubcategoryById(id: number): ProductSubcategory | Promise<ProductSubcategory>;
    getProductTroubleshootingById(id: number): ProductTroubleshooting | Promise<ProductTroubleshooting>;
    getSalesById(id: number): Sales | Promise<Sales>;
    getTicketAttachmentsById(id: number): TicketAttachments | Promise<TicketAttachments>;
    getTicketById(id: number): Ticket | Promise<Ticket>;
    getTicketLevelsById(id: number): TicketLevels | Promise<TicketLevels>;
    getUserById(id: number): User | Promise<User>;
    getUserCompanyById(id: number): UserCompany | Promise<UserCompany>;
    getZoneById(id: number): Zone | Promise<Zone>;
    login(loginUserInput: LoginUserInput): User | Promise<User>;
    searchCity(whereSearchInput: WhereCitySearchInput): Nullable<City> | Promise<Nullable<City>>;
    searchCompany(whereSearchInput: WhereCompanySearchInput): Nullable<Company> | Promise<Nullable<Company>>;
    searchCustomerFeedbackTicket(whereSearchInput: WhereCustomerFeedbackTicketSearchInput): Nullable<CustomerFeedbackTicket> | Promise<Nullable<CustomerFeedbackTicket>>;
    searchDealerSales(whereSearchInput: WhereDealerSalesSearchInput): Nullable<DealerSales> | Promise<Nullable<DealerSales>>;
    searchDealerStock(whereSearchInput: WhereDealerStockSearchInput): Nullable<DealerStock> | Promise<Nullable<DealerStock>>;
    searchManfStock(whereSearchInput: WhereManfStockSearchInput): Nullable<ManfStock> | Promise<Nullable<ManfStock>>;
    searchProduct(whereSearchInput: WhereProductSearchInput): Nullable<Product> | Promise<Nullable<Product>>;
    searchProductCategory(whereSearchInput: WhereProductCategorySearchInput): Nullable<ProductCategory> | Promise<Nullable<ProductCategory>>;
    searchProductFaq(whereSearchInput: WhereProductFaqSearchInput): Nullable<ProductFaq> | Promise<Nullable<ProductFaq>>;
    searchProductSubcategory(whereSearchInput: WhereProductSubcategorySearchInput): Nullable<ProductSubcategory> | Promise<Nullable<ProductSubcategory>>;
    searchProductTroubleshooting(whereSearchInput: WhereProductTroubleshootingSearchInput): Nullable<ProductTroubleshooting> | Promise<Nullable<ProductTroubleshooting>>;
    searchSales(whereSearchInput: WhereSalesSearchInput): Nullable<Sales> | Promise<Nullable<Sales>>;
    searchTicket(whereSearchInput: WhereTicketSearchInput): Nullable<Ticket> | Promise<Nullable<Ticket>>;
    searchTicketAttachments(whereSearchInput: WhereTicketAttachmentsSearchInput): Nullable<TicketAttachments> | Promise<Nullable<TicketAttachments>>;
    searchTicketLevels(whereSearchInput: WhereTicketLevelsSearchInput): Nullable<TicketLevels> | Promise<Nullable<TicketLevels>>;
    searchUser(whereSearchInput: WhereUserSearchInput): Nullable<User> | Promise<Nullable<User>>;
    searchUserCompany(whereSearchInput: WhereUserCompanySearchInput): Nullable<UserCompany> | Promise<Nullable<UserCompany>>;
    searchZone(whereSearchInput: WhereZoneSearchInput): Nullable<Zone> | Promise<Nullable<Zone>>;
}

export interface Sales {
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    customer: User;
    customer_id: number;
    dealer: Company;
    dealer_id: number;
    id: number;
    product: Product;
    product_id: number;
    sale_date: DateTime;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    warranty_till: number;
}

export interface SalesPagination {
    data: Sales[];
    skip: number;
    take: number;
    total: number;
}

export interface Ticket {
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    customer: User;
    customer_id: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    diagnostic_notes?: Nullable<string>;
    id: number;
    issue_category: string;
    issue_description: string;
    preferred_contact_time: string;
    priority: string;
    product: Product;
    product_id: number;
    resolution_notes?: Nullable<string>;
    resolved_at?: Nullable<DateTime>;
    sale: Sales;
    sale_id: number;
    status: string;
    ticket_levels?: Nullable<TicketLevels[]>;
    ticket_number: string;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface TicketAttachments {
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    file_path: string;
    id: number;
    status: string;
    ticket: Ticket;
    ticket_id: number;
    type: string;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface TicketAttachmentsPagination {
    data: TicketAttachments[];
    skip: number;
    take: number;
    total: number;
}

export interface TicketLevels {
    approval_notes?: Nullable<string>;
    approval_required: boolean;
    approved_by?: Nullable<User>;
    approved_by_id?: Nullable<number>;
    assigned_to: User;
    assigned_to_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    diagnostic_notes?: Nullable<string>;
    id: number;
    level: number;
    resolution_notes?: Nullable<string>;
    status: Status;
    ticket: Ticket;
    ticket_id: number;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
}

export interface TicketLevelsPagination {
    data: TicketLevels[];
    skip: number;
    take: number;
    total: number;
}

export interface TicketPagination {
    data: Ticket[];
    skip: number;
    take: number;
    total: number;
}

export interface User {
    address?: Nullable<string>;
    contact1: string;
    contact2?: Nullable<string>;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    dob?: Nullable<DateTime>;
    email?: Nullable<string>;
    id: number;
    is_dealer: boolean;
    is_manufacturer: boolean;
    name: string;
    otp?: Nullable<string>;
    password?: Nullable<string>;
    profile?: Nullable<string>;
    role: Role;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    zone: Zone;
    zone_id: number;
}

export interface UserCompany {
    company: Company;
    company_id: number;
    createdAt: DateTime;
    createdBy: User;
    createdById: number;
    deletedAt?: Nullable<DateTime>;
    deletedBy?: Nullable<User>;
    deletedById?: Nullable<number>;
    id: number;
    status: Status;
    updatedAt: DateTime;
    updatedBy?: Nullable<User>;
    updatedById?: Nullable<number>;
    user: User;
    user_id: number;
}

export interface UserCompanyPagination {
    data: UserCompany[];
    skip: number;
    take: number;
    total: number;
}

export interface UserPagination {
    data: User[];
    skip: number;
    take: number;
    total: number;
}

export interface Zone {
    city: City;
    city_id: number;
    id: number;
    name: string;
    status: Status;
}

export interface ZonePagination {
    data: Zone[];
    skip: number;
    take: number;
    total: number;
}

export type DateTime = any;
type Nullable<T> = T | null;
