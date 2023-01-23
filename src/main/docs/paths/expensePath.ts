export const expensePath = {
    post: {
        tags: ['AddExpense'],
        summary: 'API to add an expense',
        requestBody: {
            description: 'Requirements to add an expense',
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/schemas/addParams'
                    }
                }
            },
            required: true
        },
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/addResponse'
                        }
                    }
                }
            },
            500: {
                description: 'Server Error',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/error'
                        }
                    }
                }
            },
            404: {
                $ref: '#/components/notFound'
            }
        }
    },
    get: {
        tags: ['LoadExpense'],
        summary: 'API to load expenses by month',
        responses: {
            200: {
                description: 'Success',
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/schemas/loadExpense'
                        }
                    }
                }
            },
            500: {
                $ref: '#/components/serverError'
            },
            404: {
                $ref: '#/components/notFound'
            }
        }
    },
}
