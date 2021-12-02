import { useState, useRef, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(60)
  let timerId = useRef()
  const prevCount = useRef()

  useEffect(() => {
    prevCount.current = count
  }, [count])

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
    }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }

  const h1Ref = useRef()

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect()

    console.log(rect)
  })

  return (
    <div className="App" style={{ padding: 32 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
