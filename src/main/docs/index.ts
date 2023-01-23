import { expensePath } from '@/main/docs/paths/expensePath'
import { addParamsSchema, addResponseSchema, loadExpenseSchema, errorSchema } from '@/main/docs/schemas'
import { serverError, notFound } from '@/main/docs/components'

export default {
    openapi: '3.0.3',
    info: {
        title: 'API Muralis',
        description: 'API Rest based in Typescript, SOLID principles and Clean Architecture',
        version: '1.0.0',
        contact: {
            email: 'victor_heshiki@hotmail.com'
        }
    },
    servers: [{
        url: '/api'
    }],
    tags: [{
        name: 'AddExpense',
        description: 'API to add an expense'
    }, {
        name: 'LoadExpense',
        description: 'API to load expense by month'
    }],
    paths: {
        '/expense': expensePath
    },
    schemas: {
        addParams: addParamsSchema,
        addResponse: addResponseSchema,
        loadExpense: loadExpenseSchema,
        error: errorSchema
    },
    components: {
        serverError: serverError,
        notFound: notFound
    }
}
