import { useState } from 'react'

const Display = (props) => (
  <h1>{props.text}</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Counter = (props) => (
  <p>{props.text + " " + props.number}</p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1)
        break
    case "neutral":
        setNeutral(neutral + 1)
        break;
    case "bad":
        setBad(bad + 1)
        break;
    }
  }

  return (
    <div>
      <Display text="Give feedback" />
      <Button text="good" handleClick={() => handleClick('good')} />
      <Button text="neutral" handleClick={() => handleClick('neutral')} />
      <Button text="bad" handleClick={() => handleClick('bad')} />

      <Display text="Statistics" />
      <Counter number={good} text="good" />
      <Counter number={neutral} text="neutral" />
      <Counter number={bad} text="bad" />
    </div>
  )
}

export default App