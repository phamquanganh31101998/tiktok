import { useEffect, useState } from 'react'

function Content() {
  const [countdown, setCountdown] = useState(30)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(prevState => prevState - 1)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  )
}

export default Content