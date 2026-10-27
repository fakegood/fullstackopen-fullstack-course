const Course = (props) => {
    const {course} = props
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total values={course.parts.map(part => part.exercises)}/>
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
                <Part key={part.id} partName={part.name} partValue={part.exercises}/>
            )}
        </>
    )
};

const Part = (props) => {
    return (
        <p>{props.partName} {props.partValue}</p>
    )
};

const Total = (props) => {
    const {values} = props;
    return (
        <p><b>Total {values.reduce((prev, curr) => prev + curr, 0)}</b></p>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <>
            {courses.map(course => <Course key={course.id} course={course}/>)}
        </>
    )
}

export default App