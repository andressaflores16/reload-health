import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('desktops', (table) => {
        table.integer('id')
        table.string('platform')
        table.string('type')
        table.string('os')
        table.string('ip')
        table.uuid('company_id')
        table.foreign('company_id').references('companies.id')
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('desktops')
}

