import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('https://www.ineedtotest.work.gd/api/data')  // 👈 Replace with your EC2 or backend URL
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      <h1>React App newly updated with vite hihi new updated....</h1>
      <p>{data}</p>
    </div>
  )
}

export default App
