import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  return <h2>Tours Project Setup</h2>
}

export default App
