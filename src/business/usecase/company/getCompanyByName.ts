import { Company } from '../../entities/Company';
import { DesktopGateway, CompanyGateway, ContributorGateway } from '../../gateways';

export class GetCompanyByNameUC {
  constructor(
    private companyDb: CompanyGateway,
    private contributorDb: ContributorGateway,
    private desktopDb: DesktopGateway,
  ) {}

  public async execute(input: GetCompanyByNameUCInput): Promise<Company> {
    if (!input.name) {
      throw new Error('Company not found');
    }

    const company = await this.companyDb.getCompanyByName(input.name);
    if (!company) {
      throw new Error('Could not get company');
    }

    const contributors = await this.contributorDb.getContributorsByCompanyId(
      company.getId(),
    );
    company.setContributors(contributors);

    const desktops = await this.desktopDb.getDesktopsByCompanyId(
      company.getId(),
    );
    company.setDesktops(desktops);

    return company;
  }
}

interface GetCompanyByNameUCInput {
  name: string;
}
