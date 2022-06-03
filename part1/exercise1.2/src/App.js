import React from 'react'

const Header = (props) => {

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.content}</p>
      <p>{props.amount}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.part1} amount={props.ex1} />
      <Part content={props.part2} amount={props.ex2} />
      <Part content={props.part3} amount={props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>{props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content 
      part1={part1} 
      part2={part2} 
      part3={part3} 
      ex1={exercises1} 
      ex2={exercises2}
      ex3={exercises3} />
      <Total total={"Number of exercises " + (exercises1 + exercises2 + exercises3)} />
    </div>
  )
}

export default App