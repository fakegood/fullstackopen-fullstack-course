const App = () => {
    const course = 'Half Stack application development'
    const parts = [{
        name: 'Fundamentals of React', exercises: 10
    }, {
        name: 'Using props to pass data', exercises: 7
    }, {
        name: 'State of a component', exercises: 14
    }];
    const exercises = parts.map(part => part.exercises);

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total values={exercises}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
};

const Content = (props) => {
    return (
        <div>
            <Part partName={props.parts[0].name} partValue={props.parts[0].exercises}/>
            <Part partName={props.parts[1].name} partValue={props.parts[1].exercises}/>
            <Part partName={props.parts[2].name} partValue={props.parts[2].exercises}/>
        </div>
    )
};

const Part = (props) => {
    return (
        <p>{props.partName} {props.partValue}</p>
    )
};

const Total = (props) => {
    const total = props.values.reduce((acc, current) => acc + current, 0);
    return (
        <>
            <p>Number of exercises {total}</p>
        </>
    )
};

export default App