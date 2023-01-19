import { AddExpenseRepository } from '@/data/repository'
import { KnexHelper } from '@/infra/database/helper/knexHelper'

export class ExpensePostgresRepository implements AddExpenseRepository {
    async add (params: AddExpenseRepository.Params): Promise<void> {
        const props = KnexHelper.map(params)
        await KnexHelper.add(props, 'expense').then(() => console.log('any')).catch((err) => console.log(err))
    }
}
