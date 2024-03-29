import { NextFunction, Request, Response } from 'express'

export default function corsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')

  return next()
}
