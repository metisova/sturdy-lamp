const express = require('express');
const app = express();
const port = 3000;

const SAMPLE_USERS = [
    {
        id: '1',
        firstName: 'Vasya',
        lastName: null,
        email: 'vasya@gmail.com',
        imageSrc: null,
        language: null,
        country: null,
        privileges: {
            isAdmin: true,
        },
    },
    {
        id: '2',
        firstName: 'Tatiana',
        lastName: 'Stone',
        email: 'tatiana.stone@mail.com',
        imageSrc: null,
        language: 'en-US',
        country: 'US',
        privileges: {
            isAdmin: false,
        },
    },
    {
        id: '3',
        firstName: 'Jan',
        lastName: 'Novák',
        email: 'honza.novak@seznam.cz',
        imageSrc: null,
        language: 'cs-CZ',
        country: 'CZ',
        privileges: {
            isAdmin: false,
        },
    }
]

app.get('/users/getAll', (req, res) => {
  res.send({ users: SAMPLE_USERS });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
