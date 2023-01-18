import { AddExpenseRepository } from '@/data/repository'
import { knex } from 'knex'

export class ExpensePostgresRepository implements AddExpenseRepository {
    async add (params: AddExpenseRepository.Params): Promise<void> {
        knex('expense').insert({
            value: params.value,
            description: params.description,
            date: params.date,
            typePaymentId: params.date,
            categoryId: params.categoryId
        })
    }
}
