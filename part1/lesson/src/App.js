const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
} 

const Footer = () => {
  return (
    <div>
      <p>本React App由 <a href="https://github.com/twbluenaxela">twbluenaxela</a>制作设计</p>
    </div>
  )
}

const App = () => {

  const name = "Peter"
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Daisy" age={age} />
      <Hello name={name} age={50 + 10} />
      <Footer />
    </div>
  )
  
}
  

export default App
