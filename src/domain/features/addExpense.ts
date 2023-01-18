export interface AddExpense {
    execute: (params: AddExpense.Params) => Promise<void>
}

export namespace AddExpense {
    export type Params = {
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }
}
