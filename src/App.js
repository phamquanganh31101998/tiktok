import { useState } from 'react'

const courses = [
  {
    id: 1,
    name: 'hello'
  },
  {
    id: 2,
    name: 'hi'
  },
  {
    id: 3,
    name: 'hihi'
  },
]

function App() {
  const [checked, setChecked] = useState([])

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id)
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    //Call API
    console.log({ids: checked})
  }

  return (
    <div className="App" style={ {padding: 32} }>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <input 
              type="checkbox"
              checked={checked.includes(course.id)}
              onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        )
      })}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
