import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({handleClick, text}) => {
  // const {onClick, text} = props
  // console.log("props are: ", props);
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button') 
    setValue(0)


  }

  const hello = (who) => {
    const handler = () => {console.log('hello', who)}
    return handler
  }
  

  return (
    <div>
      {value}
      <button onClick={hello('world')} >button</button>
      <button onClick={hello('react')} >button</button>
      <button onClick={hello('function')} >button</button>


    </div>
  )
};

export default App;
