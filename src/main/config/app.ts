import express from 'express'
import corsMiddleware from '../middlewares/cors/cors-setup'
import { setupRoutes } from './routes'

const app = express()
app.use(express.json())
setupRoutes(app)
app.use(corsMiddleware)
export default app
