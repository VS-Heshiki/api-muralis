import { LoadExpenseRepository } from '@/data/repository'
import { LoadExpense } from '@/domain/features'

export class LoadExpenseService implements LoadExpense {

    constructor (
        private readonly loadExpenseRepository: LoadExpenseRepository
    ) { }
    async execute (): Promise<LoadExpense.Resolve> {
        const expense = await this.loadExpenseRepository.load()
        return expense
    }
}
