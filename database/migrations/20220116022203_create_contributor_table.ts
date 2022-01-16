import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('contributors', (table) => {
        table.uuid('id').primary()
        table.string('first_name')
        table.string('last_name')
        table.string('title')
        table.string('job_title')
        table.integer('age')
        table.uuid('company_id')
        table.foreign('company_id').references('companies.id')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('contributors')
}

