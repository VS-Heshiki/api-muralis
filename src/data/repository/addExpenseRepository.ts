export interface AddExpenseRepository {
    add: (params: AddExpenseRepository.Params) => Promise<void>
}

export namespace AddExpenseRepository {
    export type Params = {
        id: string
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }
}
