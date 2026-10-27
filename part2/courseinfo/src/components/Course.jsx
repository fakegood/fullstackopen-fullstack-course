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

export default Course;