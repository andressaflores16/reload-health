import { Company } from '../../entities/Company';
import { DesktopGateway, CompanyGateway, ContributorGateway } from '../../gateways';

export class GetCompanyByIdUC {
  constructor(
    private companyDb: CompanyGateway,
    private contributorDb: ContributorGateway,
    private desktopDb: DesktopGateway,
  ) {}

  public async execute(input: GetCompanyByIdUCInput): Promise<Company> {
    if (!input.id) {
      throw new Error('Company not found');
    }

    const company = await this.companyDb.getCompanyById(input.id);
    if (!company) {
      throw new Error('Could not get company');
    }

    const contributors = await this.contributorDb.getContributorsByCompanyId(
      input.id,
    );
    company.setContributors(contributors);

    const desktops = await this.desktopDb.getDesktopsByCompanyId(
      input.id,
    );
    company.setDesktops(desktops);

    return company;
  }
}

interface GetCompanyByIdUCInput {
  id: string;
}
