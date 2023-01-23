export interface AddExpenseRepository {
    add: (params: AddExpenseRepository.Params) => Promise<AddExpenseRepository.Resolve>
}

export namespace AddExpenseRepository {
    export type Params = {
        value: number
        description: string
        date: string
        typePaymentId: number
        categoryId: number
    }

    export type Resolve = {
        id: number
    }
}
