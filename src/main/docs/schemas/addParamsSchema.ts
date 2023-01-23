export const addParamsSchema = {
    type: 'object',
    properties: {
        value: {
            type: 'number',
            format: 'float'
        },
        description: {
            type: 'string'
        },
        date: {
            type: 'string'
        },
        typePaymentId: {
            type: 'number'
        },
        categoryId: {
            type: 'number'
        }
    }
}
