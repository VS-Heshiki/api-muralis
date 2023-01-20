import knex from '@/infra/database/config/knexconfig'
import { AddExpense } from '@/domain/features'


export const KnexHelper = {
    format (date: string): Date {
        const formatObj = date.toLocaleString()
        const dateObj = new Date(formatObj)
        return dateObj
    },

    map (params: any): any {
        const objDate = this.format(params.date)
        const props = [params]
        const result = props.map((a) => ({ ...a, date: objDate }))
        return result
    },

    async getId (table: string): Promise<any> {
        const resolve = await knex.raw(`SELECT * FROM ${ table } WHERE id = (SELECT LAST_INSERT_ID())`)
        return resolve[0]
    },

    async add (expense: AddExpense.Params, table: string): Promise<void> {
        await knex(table).insert(expense)
    },

    async loadByMonth (): Promise<any> {
        return await knex.raw(`SELECT * FROM expense WHERE (MONTH(DATE) = MONTH(CURRENT_DATE()) AND (YEAR(DATE)) = YEAR(CURRENT_DATE))`)
    }

}
