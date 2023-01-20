import { AddExpense } from '@/domain/features'
import { KnexHelper } from '@/infra/database/helper/knexHelper'
import { serverError, success } from '@/presentation/helpers/httpHelpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'


export class AddExpenseController implements Controller {

    constructor (private readonly addExpense: AddExpense) { }

    async handle (request: AddExpenseController.Request): Promise<HttpResponse> {
        try {
            await this.addExpense.execute(request)
            const resolve = await KnexHelper.getId('expense')
            return success(resolve[0])
        } catch (err) {
            return serverError(err)
        }
    }
}

export namespace AddExpenseController {
    export type Request = {
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }
}
