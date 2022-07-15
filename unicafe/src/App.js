import { useState } from "react";

const Display = (props) => <h1>{props.text}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Counter = (props) => <p>{props.text + " " + props.number}</p>;

const Total = (props) => <p>{"all " + props.total}</p>;

const Average = (props) => <p>{"average " + props.average}</p>;

const PositiveRatio = (props) => <p>{"positive " + props.ratio}</p>;

const StatisticLine = (props) => <p>{props.text + " " + props.value}</p>

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;

  if(good === 0 && bad === 0 && neutral === 0){
    return(
      <div>No feedback given.</div>
    )
  }

  let calculateAverage = () => {
    const total = good + neutral + bad;
    const badNumToNegative = -Math.abs(bad);
    const average = (good + badNumToNegative) / total;
    return average > 0 ? average : 0;
  };

  const calculatePositiveRatio = () => {
    const total = good + neutral + bad;
    const positiveRatio = (good / total) * 100;
    return positiveRatio ? positiveRatio : 0;
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value={good} /></td>
          </tr>
          <tr>
          <td><StatisticLine text="neutral" value={neutral} /></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" value={bad} /></td>
          </tr>
          <tr>
            <td><Total total={good + neutral + bad} /></td>
          </tr>
          <tr>
            <td><Average average={calculateAverage()} /></td>
          </tr>
          <tr>
            <td><PositiveRatio ratio={calculatePositiveRatio()} /></td>
          </tr>
        </tbody>
      </table>
      
      
      
      
      
      
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => {
    switch (type) {
      case "good":
        setGood(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
    }
  };

  let calculateAverage = () => {
    const total = good + neutral + bad;
    const badNumToNegative = -Math.abs(bad);
    const average = (good + badNumToNegative) / total;
    return average > 0 ? average : 0;
  };

  const calculatePositiveRatio = () => {
    const total = good + neutral + bad;
    const positiveRatio = (good / total) * 100;
    return positiveRatio ? positiveRatio : 0;
  };

  return (
    <div>
      <Display text="Give feedback" />
      <Button text="good" handleClick={() => handleClick("good")} />
      <Button text="neutral" handleClick={() => handleClick("neutral")} />
      <Button text="bad" handleClick={() => handleClick("bad")} />
      <Display text="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} />      
    </div>
  );
};

export default App;
