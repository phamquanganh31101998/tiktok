import { useEffect, useState } from 'react'

function Content() {
  const [title, setTitle] = useState('')

  useEffect(() => {
    console.log('ihi')
  })

  return (
    <div>
      <input
        value={title}
        type="text"
        onChange={e => setTitle(e.target.value)}
      />
      {console.log('Render')}
    </div>
  )
}

export default Content