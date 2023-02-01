import { AddExpense } from '@/domain/features'
import { MissingParamError } from '@/presentation/errors'
import { badRequest, serverError, success } from '@/presentation/helpers/httpHelpers'
import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest, HttpResponse } from '@/presentation/protocols/http'


export class AddExpenseController implements Controller {

    constructor (private readonly addExpense: AddExpense) { }

    async handle (request: HttpRequest): Promise<HttpResponse> {
        try {
            const requiredFields = ['value', 'description', 'date', 'typePaymentId', 'categoryId']
            for (const field of requiredFields) {
                if (!request.data[field]) {
                    return badRequest(new MissingParamError(field))
                }
            }

            const resolve = await this.addExpense.execute(request.data)
            return success({ id: resolve })
        } catch (err) {
            console.log(err)
            return serverError(err)
        }
    }
}
