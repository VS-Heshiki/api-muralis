import { Knex } from "knex"

export async function seed (knex: Knex): Promise<void> {
    await knex("type_payments").del()

    await knex("type_payments").insert([
        { id: 1, type: "Cash" },
        { id: 2, type: "Debit Card" },
        { id: 3, type: "Credit Card" },
        { id: 4, type: "PIX" },
    ])

    await knex("category").insert([
        { id: 1, name: "any_name0", description: "any_desc" },
        { id: 2, name: "any_name1", description: "any_desc" },
        { id: 3, name: "any_name2", description: "any_desc" },
        { id: 4, name: "any_name3", description: "any_desc" },
    ])
};
