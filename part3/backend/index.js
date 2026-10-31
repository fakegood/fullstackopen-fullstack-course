const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.json());
app.use(morgan((token, req, res) => {
    return [
        token.method(req, res),
        token.url(req, res),
        token.status(req, res),
        token.res(req, res, 'content-length'), '-',
        token['response-time'](req, res), 'ms',
        JSON.stringify(req.body)
    ].join(' ')
}));
app.use(express.static('dist'));


let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`);
})

app.get('/api/persons', (req, res) => {
    res.send(persons);
})

app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    const person = persons.find(person => person.id === id);
    if (person)
        res.json(person);
    else {
        res.statusMessage = `Person ${id} not found!`;
        res.status(404).end();
    }
})

app.put('/api/persons/:id', (req, res) => {
    const id = req.params.id;

    const personIndex = persons.findIndex(person => person.id === id);

    if (personIndex >= 0) {
        persons[personIndex] = req.body;
        res.json(req.body);
    } else {
        res.statusMessage = `Person ${id} not found!`;
        res.status(404).end();
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = req.params.id;
    persons = persons.filter(person => person.id !== id);

    res.status(204).end();
})

app.post('/api/persons', (req, res) => {
    if (!req.body) {
        return res.status(400).json({error: 'No content found'});
    }

    if (!req.body.name) {
        return res.status(400).json({errors: 'Name is required!'});
    }

    if (!req.body.number) {
        return res.status(400).json({errors: 'Number is required!'});
    }

    const existing = persons.find(person => person.name === req.body.name);
    if (existing) {
        return res.status(400).json({errors: `'${existing.name}' already exists!`});
    }

    const min = 10000000;
    const max = 99999999;
    const eightDigitNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const person = {...req.body, id: `${eightDigitNumber}`};
    persons.push(person)

    res.json(person);
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})