import { Request, Response, NextFunction } from 'express'

const asyncMiddleware = (
  fn: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void | number | string>
) => (req: Request, res: Response, next: NextFunction): void => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncMiddleware
