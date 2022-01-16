import { Company } from "../entities/Company";


export interface CompanyGateway {
    getCompanyById(id: string): Promise<Company | undefined>
    getCompanyByName(name: string): Promise<Company | undefined>
}