export interface AddExpenseRepository {
    add: (params: AddExpenseRepository.Params) => Promise<void>
}

export namespace AddExpenseRepository {
    export type Params = {
        value: number
        description: string
        date: string
        typePaymentId: number
        categoryId: number
    }
}
