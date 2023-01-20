export interface LoadExpense {
    execute: () => Promise<LoadExpense.Resolve>
}

export namespace LoadExpense {
    export type Resolve = {
        id: number,
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }
}
