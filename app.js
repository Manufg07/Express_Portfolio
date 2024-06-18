const express = require('express')

const app = express();

const path= require('path');


app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get('/manu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'manu.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})

app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'education.html'));
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'projects.html'));
})

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'skills.html'));
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
})

app.get('/talk', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'talk.html'));
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running `);
});

