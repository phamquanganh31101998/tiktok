import { useState } from 'react'
import Content from './Content'
function App() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <Content />
      <h1>{count}</h1>
      <button onClick={increase}>Click me!</button>
    </div>
  );
}

export default App;
