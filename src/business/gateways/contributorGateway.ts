import { Contributor } from '../entities/Contributor';

export interface ContributorGateway {
  getContributorsByCompanyId(id: string): Promise<Contributor[] | undefined>;
  getContributorsByCompanyName(business_name: string): Promise<Contributor[] | undefined>;
}
