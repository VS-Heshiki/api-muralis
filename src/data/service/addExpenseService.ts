import { AddExpenseRepository } from '@/data/repository'
import { AddExpense } from '@/domain/features'

export class AddExpenseService implements AddExpense {

    constructor (
        private readonly addExpenseRepository: AddExpenseRepository
    ) { }
    async execute (params: AddExpense.Params): Promise<AddExpense.Resolve> {
        return await this.addExpenseRepository.add(params)
    }
}
