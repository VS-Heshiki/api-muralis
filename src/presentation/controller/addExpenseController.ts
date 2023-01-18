import { AddExpense } from '@/domain/features'
import { serverError, success } from '@/presentation/helpers/httpHelpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'

export class AddExpenseController implements Controller {

    constructor (private readonly addExpense: AddExpense) { }

    async handle (request: AddExpenseController.Request): Promise<HttpResponse> {
        try {
            await this.addExpense.execute(request)
            return success(request)
        } catch (err) {
            return serverError(err)
        }
    }
}

export namespace AddExpenseController {
    export type Request = {
        value: number,
        description: string,
        date: Date,
        typePaymentId: number,
        categoryId: number
    }
}
