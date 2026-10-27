const Persons = (props) => {
    const { persons, keyword } = props
    return (
        <div>
            <h2>Numbers</h2>
            {persons
                .filter(person => person.name.toLowerCase().includes(keyword))
                .map((person, index) => <h3 key={index}>{person.name}: {person.number}</h3>)}
        </div>
    )
}

export default Persons;