import { LoadExpenseService } from '@/data/service/loadExpenseService'
import { LoadExpense } from '@/domain/features'
import { ExpenseMySqlRepository } from '@/infra/database/mysql/expenseMySqlRepository'

export const newLoadExpenseService = (): LoadExpense => {
    const expenseMySqlRepository = new ExpenseMySqlRepository()
    return new LoadExpenseService(expenseMySqlRepository)
}
