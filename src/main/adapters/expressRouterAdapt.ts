import { Controller } from '@/presentation/protocols/controller'
import { HttpRequest } from '@/presentation/protocols/http'

import { Request, Response } from 'express'


export const expressRouterAdapt = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = req.body
        const httpResponse = await controller.handle(httpRequest)
        const response = {
            data: httpResponse.data,
            success: httpResponse.success
        }
        res.status(httpResponse.statusCode).json(response)
    }
}
