import Button from "./components/Button"
import GlobalStyles from "./components/GlobalStyles"

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: 20 }}>
        <Button disabled/>
        <Button primary/>
      </div>
    </GlobalStyles>
  )
}

export default App