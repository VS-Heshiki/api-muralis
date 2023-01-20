import { Knex } from "knex"


export async function up (knex: Knex): Promise<void> {
    const tableExp = await knex.schema.hasTable('expense')
    const tablePay = await knex.schema.hasTable('type_payments')
    const tableCat = await knex.schema.hasTable('category')

    if (!tablePay) {
        await knex.schema.createTable('type_payments', (table) => {
            table.increments('id')
                .primary()
                .unsigned()
            table.string('type').notNullable()
        })
    }

    if (!tableCat) {
        await knex.schema.createTable('category', (table) => {
            table.increments('id')
                .primary()
                .unsigned()
            table.string('name').notNullable()
            table.string('description').notNullable()
        })
    }

    if (!tableExp) {
        await knex.schema.createTable('expense', (table) => {
            table.increments("id").primary().unique().unsigned()
            table.decimal("value", 14, 2).notNullable()
            table.date("date").notNullable()
            table.text("description").notNullable()
            table.integer("typePaymentId").notNullable().unsigned()
            table.integer("categoryId").notNullable().unsigned()
            table.foreign("typePaymentId").references('id').inTable('type_payments')
            table.foreign("categoryId").references('id').inTable('category')
        })
    }
}

export async function down (knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists('expense')
        .dropTableIfExists('type_payments')
        .dropTableIfExists('category')
}

