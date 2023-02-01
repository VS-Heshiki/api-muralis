import { ServerError } from '@/presentation/errors/serverError'
import { HttpResponse } from '@/presentation/protocols/http'

export const serverError = (error: Error): HttpResponse => ({
    statusCode: 500,
    data: new ServerError(error.stack),
    success: false
})

export const success = (data: object): HttpResponse => ({
    statusCode: 200,
    data,
    success: true
})

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    data: error.message,
    success: false
})
