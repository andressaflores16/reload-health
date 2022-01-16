import { Company } from "../../entities/Company";
import { CompanyGateway } from "../../gateways/companyGateway";

export class GetCompanyByIdUC {
    constructor(
        private db: CompanyGateway
    ) {}

    public async execute(input: GetCompanyByIdUCInput): Promise<Company> {
        if (!input.id) {
            throw new Error("Company not found")
        }

        const company = await this.db.getCompanyById(input.id)
    
        if (!company) {
            throw new Error("Could not get company")
        }
        
        return company
    }
}

interface GetCompanyByIdUCInput {
    id: string;
}
