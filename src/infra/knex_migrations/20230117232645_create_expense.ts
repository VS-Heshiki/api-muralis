import { Knex } from "knex"


export async function up (knex: Knex): Promise<void> {
    await knex.schema.createTable('expense', (table) => {
        table.increments("id").primary()
        table.decimal("value", 14, 2).notNullable()
        table.date("date").notNullable()
        table.string("description").notNullable()
        table.integer("typePaymentId").notNullable()
        table.integer("categoryId").notNullable()
    })
}


export async function down (knex: Knex): Promise<void> {
    await knex.schema.dropTable('expense')
}

