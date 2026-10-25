import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
      <div>
        <h1>Please provide feedback!</h1>
        <button onClick={() => setGood(good + 1)}>Good +1</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral +1</button>
        <button onClick={() => setBad(bad + 1)}>Bad +1</button>

        <p>Total Good: {good}</p>
        <p>Total Neutral: {neutral}</p>
        <p>Total Bad: {bad}</p>
      </div>
  )
}

export default App