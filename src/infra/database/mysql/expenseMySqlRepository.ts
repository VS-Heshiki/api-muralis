import { AddExpenseRepository, LoadExpenseRepository } from '@/data/repository'
import { KnexHelper } from '@/infra/database/helper/knexHelper'

export class ExpenseMySqlRepository implements AddExpenseRepository, LoadExpenseRepository {
    async add (params: AddExpenseRepository.Params): Promise<AddExpenseRepository.Resolve> {
        const resolve = await KnexHelper.add(params, 'expense')
        return resolve
    }

    async load (): Promise<LoadExpenseRepository.Resolve> {
        const resolve = await KnexHelper.loadByMonth()
        return resolve[0]
    }
}
