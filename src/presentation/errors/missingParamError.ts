export class MissingParamError extends Error {
    constructor (params?: string) {
        super(`${ params } is missing! :(`)
        this.name = 'MissingParamError'
    }
}
