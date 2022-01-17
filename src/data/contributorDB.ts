import { ContributorGateway } from '../business/gateways/contributorGateway';
import { Contributor } from '../business/entities/Contributor';
import { BaseDB } from './baseDB';

export class ContributorDB extends BaseDB implements ContributorGateway {
  private contributorTableName = 'contributors';

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
}
