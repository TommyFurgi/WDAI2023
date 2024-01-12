const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const port = 3000;

app.use(express.json());
const models = require('./db');

models.sequelize.sync().then(function() {
    console.log('connected to database')
    }).catch(function(err) {
    console.log(err)
});
    

// Utwórz rekord w bazie danych
// models.PersonSchema.create({
//     name: 'john',
//     surname: 'Doe',
//     job: 'IT'
// }).then(function (person) {
//     console.log('Utworzono osobę:', person.get());
// }).catch(function (err) {
//     console.log(err);
// });


app.get('/', async (req, res) => {
    try {
        const responseData = {
            message: 'Hello, this is a GET request!'
        };
        res.status(200).json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/hello', async (req, res) => {
    try {
        const name = req.query.name || '';
        const responseData = {
            message: `Czesc ${name}!`
        };
        res.status(200).json(responseData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/person', async (req, res) => {
    try {
        const people = await models.PersonSchema.findAll();
        res.status(200).json(people);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/person/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await models.PersonSchema.findByPk(personId);

        if (!person) {
            return res.status(404).json({ message: 'Person not found' });
        }

        res.status(200).json(person);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.post('/create', async (req, res) => {
    try {
        const { name, surname, job } = req.body;
        const person = await models.PersonSchema.create({
            name,
            surname,
            job
        });

        res.status(201).json(person);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
    
 