import knex from '@/infra/database/config/knexconfig'
import { AddExpense } from '@/domain/features'


export const KnexHelper = {

    async add (expense: AddExpense.Params, table: string): Promise<AddExpense.Resolve> {
        return await knex(table).insert(expense)
    },

    async loadByMonth (): Promise<any> {
        return await knex.raw(`SELECT * FROM expense WHERE (MONTH(DATE) = MONTH(CURRENT_DATE()) AND (YEAR(DATE)) = YEAR(CURRENT_DATE))`)
    }

}
