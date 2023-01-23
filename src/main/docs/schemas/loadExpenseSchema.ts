export const loadExpenseSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'object',
            properties: {
                id: {
                    type: 'number'
                },
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
        },
        success: {
            type: 'boolean'
        }
    }
}
