import { AddExpenseService } from '@/data/service/addExpenseService'
import { AddExpense } from '@/domain/features'
import { ExpenseMySqlRepository } from '@/infra/database/mysql/expenseMySqlRepository'

export const newAddExpenseService = (): AddExpense => {
    const expenseMySqlRepository = new ExpenseMySqlRepository()
    return new AddExpenseService(expenseMySqlRepository)
}
