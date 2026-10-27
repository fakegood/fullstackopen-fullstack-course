import {useEffect, useState} from 'react'
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";
import Form from "./components/Form.jsx";
import personService from "./helper/PersonService.jsx";

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() => {
        personService.getAll().then(res => {
            setPersons(res);
        })
    }, [])

    function addName(e) {
        e.preventDefault();

        if (newName === '') {
            alert(`Name cannot be empty!`);
            return;
        }

        if (newNumber === '') {
            alert(`Number cannot be empty!`);
            return;
        }

        const target = persons.find(person => person.name.toLowerCase() === newName.toLowerCase());
        if (target) {
            if (target.number !== newNumber) {
                const confirmUpdate = confirm(`Are you sure you want to update ${newName}.`);
                target.number = newNumber;
                if (confirmUpdate) {
                    personService.update(target.id, target).then(res => {

                        setNewName('');
                        setNewNumber('');

                        const updatedPerson = persons.map(person => person.id === res.id ? res : person);
                        setPersons(updatedPerson);
                    });
                }
            } else {
                alert(`'${newName}' already exists in phonebook!`);
            }
            return;
        }

        const newPerson = {name: newName, number: newNumber, id: "5"};

        personService.create(newPerson).then(res => {

            setNewName('');
            setNewNumber('');

            persons.push(res);
        });
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

    function onDelete(e, id) {
        e.preventDefault();
        const target = persons.find(person => person.id === id);
        if (!target)
            return;

        const confirmDeletion = confirm(`Delete '${target.name}'?`,)
        if (confirmDeletion) {
            personService.deleteEntry(id).then(res => {
                const newArray = persons.filter(person => person.id !== res.id)
                setPersons(newArray);
            });

        }
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter keyword={search} onChanged={onSearchChanged}/>
            <h3>Edit:</h3>
            <Form nameInput={newName} numberInput={newNumber}
                  onNameChanged={onNameChanged} onNumberChanged={onNumberChanged}
                  addName={addName}/>
            <Persons persons={persons} keyword={search} onDelete={onDelete}/>
        </div>
    )
}

export default App