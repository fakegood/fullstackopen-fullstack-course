import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '34-34-1234567890'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    function addName(e) {
        e.preventDefault();

        if (newName === '')
            return;

        if(newNumber === '')
            return;

        if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase()) === true) {
            alert(`'${newName}' already exists in phonebook!`);
            return;
        }

        persons.push({name: newName, number: newNumber});
        setNewName('');
        setNewNumber('');
    }

    function onNameChanged(e) {
        setNewName(e.target.value);
    }

    function onNumberChanged(e) {
        setNewNumber(e.target.value);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={(e) => addName(e)}>
                <div>
                    Name: <input value={newName} onChange={(e) => onNameChanged(e)}/>
                </div>
                <div>
                    Number: <input value={newNumber} onChange={(e) => onNumberChanged(e)}/>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person, index) => <h3 key={index}>{person.name}: {person.number}</h3>)}
        </div>
    )
}

export default App