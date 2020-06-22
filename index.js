require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

morgan.token('body', (req) => {
    console.log(req.body)
    return(JSON.stringify(req.body))
})

const app = express()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(express.json())
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
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    // const id = Number(request.params.id)
    // console.log('request person with id:', id)
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error)) 
})

app.get('/info', (request, response) => {
    console.log('get info')
    Person.countDocuments({}, (err, count) => {
        if (err) return response.status(400).json({error: "person count failed"});
        const date = new Date()
        response.send(`<div>Phonebook has info for ${count} people <br></br>
        ${date}</div>`)
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.post('/api/persons', (request, response, next) => {
    const body = request.body
    // if (!body.name || !body.number) {
    //     return response.status(400).json({
    //         error: 'name or number is missing'
    //     })
    // }

    const person = Person({
        name: body.name,
        number: body.number,
    })

    person.save()
        .then(savedPerson => {
            response.json(savedPerson)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    
    const person = {
        name: body.name,
        number: body.number,
    }

    Person.findByIdAndUpdate(request.params.id, person, {new: true, runValidators: true})
        .then(updatedPerson => {
            response.json(updatedPerson)
        })
        .catch(error => next(error))
})


const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message})
    } else if (error.name === 'MongoError') {
        return response.status(400).json({ error: error.message})
    }
  
    next(error)
  }
  
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
