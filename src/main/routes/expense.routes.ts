import { expressRouterAdapt } from '@/main/adapters/expressRouterAdapt'
import { newAddExpenseController } from '@/main/factories/controller/addExpenseController'
import { newLoadExpenseController } from '@/main/factories/controller/loadExpenseController'
import { Router } from 'express'

export default (router: Router): void => {
    router.post('/expense', expressRouterAdapt(newAddExpenseController()))
    router.get('/expense', expressRouterAdapt(newLoadExpenseController()))
}
