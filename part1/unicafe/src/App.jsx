import {useState} from 'react'

const StatisticLine = (props) => {
    return (
        <div>
            <p>{props.text}: {props.value}</p>
        </div>
    )
}

const Statistics = (props) => {
    const {good, neutral, bad} = props;

    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positive = total === 0 ? 0 : (good / total) * 100;

    if(total === 0) {
        return (
            <div>
                <h1>Please provide feedback!</h1>
                <button onClick={props.onGood}>Good +1</button>
                <button onClick={props.onNeutral}>Neutral +1</button>
                <button onClick={props.onBad}>Bad +1</button>

                <h2>Statistics</h2>
                <p>No feedback given.</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Please provide feedback!</h1>
            <button onClick={props.onGood}>Good +1</button>
            <button onClick={props.onNeutral}>Neutral +1</button>
            <button onClick={props.onBad}>Bad +1</button>

            <h2>Statistics</h2>
            <StatisticLine text="Total Good" value={good} />
            <StatisticLine text="Total Neutral" value={neutral} />
            <StatisticLine text="Total Bad" value={bad} />
            <StatisticLine text="Total Feedback" value={total} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
        </div>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <>
            <Statistics good={good} neutral={neutral} bad={bad}
                        onGood={() => setGood(good + 1)}
                        onNeutral={()=>setNeutral(neutral + 1)}
                        onBad={()=>setBad(bad + 1)}
            />
        </>
    )
}

export default App