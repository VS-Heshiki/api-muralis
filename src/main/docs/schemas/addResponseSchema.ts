export const addResponseSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'object',
            properties: {
                id: {
                    type: 'number'
                }
            }
        },
        success: {
            type: 'boolean'
        }
    }
}
