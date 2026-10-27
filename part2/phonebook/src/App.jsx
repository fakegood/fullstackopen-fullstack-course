import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    function addName(e) {
        e.preventDefault();

        if (newName === '')
            return;

        persons.push({name: newName});
        setNewName('');
    }

    function onNameChanged(e) {
        setNewName(e.target.value);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={(e) => addName(e)}>
                <div>
                    Name: <input value={newName} onChange={(e) => onNameChanged(e)}/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => <h3>{person.name}</h3>)}
        </div>
    )
}

export default App