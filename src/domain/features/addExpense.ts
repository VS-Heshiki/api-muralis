export interface AddExpense {
    execute: (params: AddExpense.Params) => Promise<AddExpense.Resolve>
}

export namespace AddExpense {
    export type Params = {
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }

    export type Resolve = {
        id: number
    }
}
