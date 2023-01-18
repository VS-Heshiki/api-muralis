import { newAddExpenseService } from '@/main/factories/features/addExpenseServiceFactory'
import { AddExpenseController } from '@/presentation/controller/addExpenseController'
import { Controller } from '@/presentation/protocols/controller'

export const newAddExpenseController = (): Controller => {
    const controller = new AddExpenseController(newAddExpenseService())
    return controller
}
