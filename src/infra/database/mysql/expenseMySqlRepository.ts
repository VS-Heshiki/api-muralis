import { AddExpenseRepository, LoadExpenseRepository } from '@/data/repository'
import { KnexHelper } from '@/infra/database/helper/knexHelper'

export class ExpenseMySqlRepository implements AddExpenseRepository, LoadExpenseRepository {
    async add (params: AddExpenseRepository.Params): Promise<AddExpenseRepository.Resolve> {
        const props = KnexHelper.map(params)
        return await KnexHelper.add(props, 'expense')
    }

    async load (): Promise<LoadExpenseRepository.Resolve> {
        const resolve = await KnexHelper.loadByMonth()
        return resolve[0]
    }
}
