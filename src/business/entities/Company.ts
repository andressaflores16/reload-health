import { Contributor } from "./Contributor";

export class Company {
  constructor(
    private id: string,
    private business_name: string,
    private suffix: string,
    private industry: string,
    private catch_phrase: string,
    private bs_company_statement: string,
    private logo: string,
    private type: string,
    private phone_number: string,
    private full_address: string,
    private latitude: string,
    private longitude: string,
    private contributors: Array<Contributor>,
  ) {}

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.business_name;
  }

  public getSuffix(): string {
    return this.suffix;
  }

  public getIndustry(): string {
    return this.industry
  }

  public getCatchPhrase(): string {
    return this.catch_phrase
  }

  public getBsCompanyStatement(): string {
    return this.bs_company_statement
  }

  public getLogo(): string {
    return this.logo
  }

  public getType(): string {
    return this.type
  }

  public getPhoneNumber(): string {
    return this.phone_number
  }

  public getFullAddress(): string {
    return this.full_address
  }

  public getLatitude(): string {
    return this.latitude
  }

  public getLongitude(): string {
    return this.longitude
  }

  public getContributors(): Array<Contributor> {
    return this.contributors
  }

}