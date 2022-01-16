import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('contributors', (table) => {
        table.uuid('id').primary()
        table.string('firstName')
        table.string('lastName')
        table.string('title')
        table.string('jobTitle')
        table.integer('age')
        table.foreign('companyId').references('companies.id')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('contributors')
}

