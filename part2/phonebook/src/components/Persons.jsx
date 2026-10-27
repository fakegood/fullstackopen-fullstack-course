const Persons = (props) => {
    const {persons, keyword, onDelete} = props

    let filteredPersons = persons?.length > 0 ? persons.filter(person => person.name.toLowerCase().includes(keyword.toLowerCase())) : [];

    return (
        <div>
            <h2>Numbers</h2>
            {
                filteredPersons.map((person, index) => (
                    <div key={index}>
                        <span>{person.name}: {person.number}</span>
                        <button onClick={(e) => onDelete(e, person.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}


export default Persons;