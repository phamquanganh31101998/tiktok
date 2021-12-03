import {useMemo, useState, useRef} from 'react'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleSubmit = () => {
    setProducts([...products, {
      name,
      price: +price
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const total = useMemo(() => {
    return products.reduce(
        (result, product) => {
          console.log('reduce')
          return result + product.price
        }, 0)
  }, [products])

  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        value={name}
        ref={nameRef}
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <br/>
      <input
        value={price}
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <br/>
      <button onClick={handleSubmit}>Add</button>
      <br/>
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
