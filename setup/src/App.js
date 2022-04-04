import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchTours = async () => {
    setLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()
      setTours(data)
      setLoading(false)
    }catch(err) {
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  )
}

export default App
