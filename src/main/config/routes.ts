/* eslint-disable n/no-path-concat */
import { Express, Router } from 'express'
import { readdirSync } from 'fs'

export function setupRoutes(app: Express) {
  const router = Router()
  app.use('/api/v1', router)
  readdirSync(`${__dirname}/../routes`).map(async (fileName) => {
    ;(await import(`../routes/${fileName}`)).default(router)
  })
}
