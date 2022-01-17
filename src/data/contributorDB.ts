import { ContributorGateway } from '../business/gateways/contributorGateway';
import { Contributor } from '../business/entities/Contributor';
import { BaseDB } from './baseDB';

export class ContributorDB extends BaseDB implements ContributorGateway {
  private contributorTableName = 'contributors';
  public static instance: ContributorGateway | undefined = undefined;
  private constructor() {
    super()
  }

  static getInstance(): ContributorGateway {
    if (!ContributorDB.instance) {
      ContributorDB.instance = new ContributorDB();
    }

    return ContributorDB.instance;
  }

  public async getContributorsByCompanyId(
    id: string,
  ): Promise<Contributor[] | undefined> {
    const result = await this.connection
      .select('*')
      .from(this.contributorTableName)
      .where('company_id', id);

    if (!result.length) {
      return undefined;
    }

    return result.map((contributor) => {
      return new Contributor(
        contributor.id,
        contributor.first_name,
        contributor.last_name,
        contributor.title,
        contributor.job_title,
        contributor.age,
      );
    });
  }

  public async getContributorsByCompanyName(
    business_name: string,
  ): Promise<Contributor[] | undefined> {
    const result = await this.connection
      .select('*')
      .from(this.contributorTableName)
      .where('business_name', business_name);

    if (!result.length) {
      return undefined;
    }

    return result.map((contributor) => {
      return new Contributor(
        contributor.id,
        contributor.first_name,
        contributor.last_name,
        contributor.title,
        contributor.job_title,
        contributor.age,
      );
    });
  }
}
