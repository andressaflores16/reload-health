import { Company } from '../business/entities/Company';
import { BaseDB } from './baseDB';

export class CompanyDB extends BaseDB {
  private companyTableName = 'companies';

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
      []
    );
  }

  public async getCompanyByName(name: string): Promise<Company | undefined> {
      const result = await this.connection.select('*').from(this.companyTableName).where('name', name)

      if (!result.length) {
          return undefined;
      }
  }
}
