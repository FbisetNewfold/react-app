import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = Number(process.env.PORT) || 3001
const isProduction = process.env.NODE_ENV === 'production'

type HelloResponse = {
  message: string
}

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from the Express API' } satisfies HelloResponse)
})

if (isProduction) {
  const distPath = path.join(__dirname, '../dist')
  app.use(express.static(distPath))
  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
