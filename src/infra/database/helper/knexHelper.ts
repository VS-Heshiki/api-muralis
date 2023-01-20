import knex from '@/infra/database/config/knexconfig'
import { AddExpense } from '@/domain/features'
import moment from 'moment'


export const KnexHelper = {
    format (date: Date): Date {
        const momentObj = moment(date).format('DD-MM-YYYY')
        const formatDate = moment(momentObj).toDate()
        return formatDate
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
    }
}
