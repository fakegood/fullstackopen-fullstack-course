const Course = (props) => {
    const {course} = props
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
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
        <>
            {props.parts.map(part =>
                <Part key={part.id} partName={part.name} partValue={part.exercises} />
            )}
        </>
    )
};

const Part = (props) => {
    return (
        <p>{props.partName} {props.partValue}</p>
    )
};

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course}/>
}

export default App