import type { Knex } from "knex"

export const dbKnex: { [key: string]: Knex.Config } = {
    development: {
        client: "postgresql",
        connection: {
            host: 'localhost',
            database: 'muralis',
            user: 'postgres',
            password: 'qwer',
        },
        migrations: {
            directory: "src/infra/knex_migrations"
        }
    }
}

