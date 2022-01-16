import { Contributor } from "./Contributor";

export interface Company {
    id: number
    business_name: string
    suffix: string
    industry: string
    catch_phrase: string
    bs_company_statement: string
    logo: string
    type: string
    phone_number: string
    full_address: string
    latitude: string
    longitude: string
    contributors: Array<Contributor>
}