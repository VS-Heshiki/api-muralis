import { LoadExpense } from '@/domain/features'
import { serverError, success } from '@/presentation/helpers/httpHelpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpResponse } from '@/presentation/protocols/http'


export class LoadExpenseController implements Controller {

    constructor (private readonly loadExpense: LoadExpense) { }

    async handle (request: LoadExpenseController): Promise<HttpResponse> {
        try {
            const resolve = await this.loadExpense.execute()
            return success(resolve)
        } catch (err) {
            return serverError(err)
        }
    }
}

export namespace LoadExpenseController {
    export type Resolve = {
        id: number
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }
}
