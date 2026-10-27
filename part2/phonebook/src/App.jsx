import {useState} from 'react'
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import Form from "./components/Form.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '34-34-1234567890'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    function addName(e) {
        e.preventDefault();

        if (newName === '') {
            alert(`Name cannot be empty!`);
            return;
        }

        if (newNumber === ''){
            alert(`Number cannot be empty!`);
            return;
        }

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

    function onSearchChanged(e) {
        setSearch(e.target.value);
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter keyword={search} onChanged={onSearchChanged}/>
            <h3>Edit:</h3>
            <Form nameInput={newName} numberInput={newNumber}
                  onNameChanged={onNameChanged} onNumberChanged={onNumberChanged}
                  addName={addName}/>
            <Persons persons={persons} keyword={search}/>
        </div>
    )
}

export default App