import { AddExpenseService } from '@/data/service/addExpenseService'
import { AddExpense } from '@/domain/features'
import { ExpensePostgresRepository } from '@/infra/database/postgres/expensePostgresRepository'

export const newAddExpenseService = (): AddExpense => {
    const expensePostgresRepository = new ExpensePostgresRepository()
    return new AddExpenseService(expensePostgresRepository)
}
