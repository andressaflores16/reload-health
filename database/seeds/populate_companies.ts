import { Knex } from 'knex';
import data from './data.json';
import { Company, Contributor, Desktop } from '../types';
import { v4 as uuidv4 } from 'uuid';

const companies = data as Company[];

export async function seed(knex: Knex): Promise<any> {
  const queryBuilders = companies.map((company) => {
    return createCompany(company, knex);
  });
  // return knex('contributors').truncate().then(() => {
  //   return knex('companies').truncate()
  // }).then(() => {
    return Promise.all(queryBuilders);
  // })
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
    desktops
  } = company;
  const company_id: string = uuidv4()
  
  const companyPromise = knex('companies').insert({
    id: company_id,
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

  const contributorPromises = contributors.map(contributor => {
    return createContributor(contributor, knex, company_id);
  });

  const desktopPromises = desktops.map(desktop => {
    return createDesktop(desktop, knex, company_id)
  });

  return companyPromise.then(() => {
    return Promise.all(contributorPromises)
  }).then(() => {
    return Promise.all(desktopPromises)
  })
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
}

const createDesktop = async (desktop: Desktop, knex: Knex, company_id: string) => {
  const { platform, type, os, ip } = desktop;
  const id: string = uuidv4()

  await knex('desktops').insert({
    id, platform, type, os, ip, company_id
  })
}

