import { useState } from 'react'

const QuoteGeneratorButton = (props) => (
  <button onClick={props.handleClick}>next anecdote</button>
)

const UpvoteButton = (props) => (
  <button onClick={props.handleUpvote}>vote</button>
)
  
const Display = (props) => (
  <p>{props.text}</p>
)

const TopAnecdote = (props) => (
  <p></p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  let pointsInitialArray = new Uint8Array(anecdotes.length)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(pointsInitialArray)


  

  const handleClick = () => {
    const min = 0
    const max = anecdotes.length
    const randomNumber = Math.floor(Math.random() * (max - min) + min)
    setSelected(randomNumber)
  }

  const handleUpvote = () => {
    const copy = [... points]  
    copy[selected] += 1
    console.log("Values in copy: ", copy)
    setPoints(copy)
  }

  const getTopAnecdote = () => {
    const max = Math.max(... points)
    const indexOfTopAnecdote = points.indexOf(max)
    console.log(indexOfTopAnecdote)
    return indexOfTopAnecdote
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Display text={anecdotes[selected]} />
      <Display text={"has " + points[selected] + " votes"} />
      <UpvoteButton handleUpvote={() => handleUpvote()} />
      <QuoteGeneratorButton handleClick={() => handleClick()} />
      <h1>Anecdote with the most votes</h1>
      <Display text={anecdotes[getTopAnecdote()]} />
      <Display text={"has " + points[getTopAnecdote()] + " votes"} />
    </div>
  )
}

export default App