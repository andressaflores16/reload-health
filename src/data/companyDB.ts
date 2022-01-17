import { CompanyGateway } from '../business/gateways';
import { Company } from '../business/entities/Company';
import { BaseDB } from './baseDB';

export class CompanyDB extends BaseDB implements CompanyGateway{
  private companyTableName = 'companies';
  public static instance: CompanyGateway | undefined = undefined;
  private constructor() {
    super()
  }

  static getInstance(): CompanyGateway {
    if (!CompanyDB.instance) {
      CompanyDB.instance = new CompanyDB();
    }

    return CompanyDB.instance;
  }

  public async getCompanyById(id: string): Promise<Company | undefined> {
    const result = await this.connection
      .select('*')
      .from(this.companyTableName)
      .where('id', id);

    if (!result.length) {
      return undefined;
    }

    return new Company(
      id,
      result[0].business_name,
      result[0].suffix,
      result[0].industry,
      result[0].catch_phrase,
      result[0].bs_company_statement,
      result[0].logo,
      result[0].type,
      result[0].phone_number,
      result[0].full_address,
      result[0].latitude,
      result[0].longitude,
      [],
      [],
    );
  }

  public async getCompanyByName(name: string): Promise<Company | undefined> {
    const result = await this.connection
      .select('*')
      .from(this.companyTableName)
      .where('business_name', name);

    if (!result.length) {
      return undefined;
    }

    return new Company(
      result[0].id,
      result[0].business_name,
      result[0].suffix,
      result[0].industry,
      result[0].catch_phrase,
      result[0].bs_company_statement,
      result[0].logo,
      result[0].type,
      result[0].phone_number,
      result[0].full_address,
      result[0].latitude,
      result[0].longitude,
      [],
      [],
    );
  }
}
