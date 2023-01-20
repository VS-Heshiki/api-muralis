import { AddExpenseRepository, LoadExpenseRepository } from '@/data/repository'
import { KnexHelper } from '@/infra/database/helper/knexHelper'

export class ExpenseMySqlRepository implements AddExpenseRepository, LoadExpenseRepository {
    async add (params: AddExpenseRepository.Params): Promise<void> {
        const props = KnexHelper.map(params)
        await KnexHelper.add(props, 'expense')
    }

    async load (): Promise<LoadExpenseRepository.Resolve> {
        return await KnexHelper.loadByMonth()
    }
}
