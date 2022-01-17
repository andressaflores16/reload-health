import { Contributor } from "../entities/Contributor";


export interface ContributorGateway {
    getContributorsByCompanyId(id: string): Promise<Contributor[] | undefined>
}