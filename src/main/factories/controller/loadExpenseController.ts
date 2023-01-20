import { newLoadExpenseService } from '@/main/factories/features/loadExpenseServiceFactory'
import { LoadExpenseController } from '@/presentation/controller/loadExpenseController'
import { Controller } from '@/presentation/protocols/controller'

export const newLoadExpenseController = (): Controller => {
    const controller = new LoadExpenseController(newLoadExpenseService())
    return controller
}
