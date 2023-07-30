import React, { useState } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  return (
    <div>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>
        Click
      </button>
    </div>
  )
}

export default App