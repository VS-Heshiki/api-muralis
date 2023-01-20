export interface LoadExpenseRepository {
    load: () => Promise<LoadExpenseRepository.Resolve>
}

export namespace LoadExpenseRepository {
    export type Resolve = {
        id: number,
        value: number
        description: string
        date: Date
        typePaymentId: number
        categoryId: number
    }
}
