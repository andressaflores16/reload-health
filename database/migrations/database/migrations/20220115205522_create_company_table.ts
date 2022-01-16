import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('companies', (table) => {
        table.uuid('id').primary()
        table.string('business_name')
        table.string('suffix')
        table.string('industry')
        table.string('catch_phrase')
        table.string('bs_company_statement')
        table.string('logo')
        table.string('type')
        table.string('phone_number')
        table.string('full_address')
        table.string('latitude')
        table.string('longitude')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('companies')
}

