import { AddExpenseService } from '@/data/service/addExpenseService'
import { AddExpense } from '@/domain/features'
import { ExpensePostgresRepository } from '@/infra/database/mysql/expenseMySqlRepository'

export const newAddExpenseService = (): AddExpense => {
    const expensePostgresRepository = new ExpensePostgresRepository()
    return new AddExpenseService(expensePostgresRepository)
}
