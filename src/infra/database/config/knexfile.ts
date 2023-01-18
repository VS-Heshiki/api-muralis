import { Knex } from "knex"

export const config: { [key: string]: Knex.Config } = {
    development: {
        client: "mysql2",
        connection: {
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '1234',
            database: 'api_muralis'
        },
        migrations: {
            directory: './migrations'
        }
    }
}

module.exports = config
