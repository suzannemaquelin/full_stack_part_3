const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

morgan.token('body', (req) => {
    console.log(req.body)
    return(JSON.stringify(req.body))
})

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(morgan('tiny'))
app.use(cors())

let persons = [
   {
     "name": "Arto Hellas",
     "number": "040-123456",
     "id": 1
   },
   {
     "name": "Ada Lovelace",
     "number": "39-44-5323523",
     "id": 2
   },
   {
     "name": "Dan Abramov",
     "number": "12-43-234345",
     "id": 3
   },
   {
     "name": "Mary Poppendieck",
     "number": "39-23-6423122",
     "id": 4
   }
]

app.get('/api/persons', (request, response) => {
    console.log('get persons')
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log('request person with id:', id)
    const person = persons.find(person => person.id === id)
    console.log(person)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    console.log('get info')
    const entries = persons.length
    const date = new Date()
    response.send(`<div>Phonebook has info for ${entries} people <br></br>
        ${date}</div>`)
})

app.delete('/api/persons/:id', (request,response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const generateId = () => Math.floor(Math.random()*(10_000) + 4)

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.post('/api/persons', (request,response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number is missing'
        })
    }

    if (persons.some(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})