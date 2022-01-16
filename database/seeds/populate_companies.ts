import { Knex } from 'knex';
import data from './data.json';
import { Company, Contributor, Desktop } from '../types';
import { v4 as uuidv4 } from 'uuid';

const companies = data as Company[];

export async function seed(knex: Knex): Promise<void> {
  const queryBuilders = companies.map((company) => {
    return createCompany(company, knex);
  });
  await Promise.all([knex('companies').del(), ...queryBuilders]);
}

const createCompany = async (company: Company, knex: Knex) => {
  const {
    business_name,
    suffix,
    industry,
    catch_phrase,
    bs_company_statement,
    logo,
    type,
    phone_number,
    full_address,
    latitude,
    longitude,
    contributors,
  } = company;
  const id: string = uuidv4()
  
  const companyPromise = knex('companies').insert({
    id,
    business_name,
    suffix,
    industry,
    catch_phrase,
    bs_company_statement,
    logo,
    type,
    phone_number,
    full_address,
    latitude,
    longitude,
  });

  const contributorPromises = contributors.map((contributor) => {
    return createContributor(contributor, knex, id);
  });

  return [companyPromise, ...contributorPromises];
};

const createContributor = async (
  contributor: Contributor,
  knex: Knex,
  company_id: string,
) => {
  const { firstName, lastName, title, jobTitle, age } = contributor;
  const id: string = uuidv4()

  await knex('contributors').insert({
    id,
    first_name: firstName,
    last_name: lastName,
    title,
    job_title: jobTitle,
    age,
    company_id,
  });
};
