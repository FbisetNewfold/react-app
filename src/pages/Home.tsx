import { useEffect, useState } from 'react'

type HelloResponse = {
  message: string
}

export default function Home() {
  const [count, setCount] = useState(0)
  const [apiMessage, setApiMessage] = useState('')
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    let cancelled = false

    fetch('/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<HelloResponse>
      })
      .then((data) => {
        if (!cancelled) setApiMessage(data.message)
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message = err instanceof Error ? err.message : 'Could not reach the API'
          setApiError(message)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <h1>Home</h1>
      <p>A basic React app with Vite, React Router, and an Express API.</p>
      {apiMessage && <p className="api-message">{apiMessage}</p>}
      {apiError && <p className="api-error">{apiError}</p>}
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>
    </>
  )
}
