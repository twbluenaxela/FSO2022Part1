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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content 
      part1={parts[0].name} 
      part2={parts[1].name} 
      part3={parts[2].name} 
      ex1={parts[0].exercises} 
      ex2={parts[1].exercises}
      ex3={parts[2].exercises} />
      <Total total={"Number of exercises " + (parts[0].exercises + parts[1].exercises + parts[2].exercises)} />
    </div>
  )
}

export default App