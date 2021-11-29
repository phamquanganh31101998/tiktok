import { useState } from 'react'

function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs ?? []
  })

  const handleSubmit = () => {
    setJobs(prevState => {
      const newJobs = [...prevState, job]
      localStorage.setItem('jobs', JSON.stringify(newJobs))
      return newJobs
    })
    setJob('')
  }

  return (
    <div className="App" style={{ padding: 32 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
