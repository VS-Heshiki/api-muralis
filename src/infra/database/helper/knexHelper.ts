import { AddExpense } from '@/domain/features'
import knex from '@/infra/database/config/knexconfig'
import moment from 'moment'


export const KnexHelper = {
    format (date: Date): Date {
        const momentObj = moment(date).format("DD/MM/YYYY")
        const formatDate = moment(momentObj).toDate()
        return formatDate
    },

    map (params: any): any {
        const objDate = this.format(params.date)
        const props = [params]
        const result = props.map((a) => ({ ...a, date: objDate }))
        return result
    },

    async add (expense: AddExpense.Params, table: string): Promise<void> {
        await knex(table).insert(expense)
    }
}
