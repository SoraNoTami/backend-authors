const express = require('express');
const app = express();
const port = 8000

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/', (req, res) => {
    res.send('Authors API');
});

app.get('/authors/:num', (req, res) => {
    const num = req.params.num - 1
    res.send(`${authors[num].name}, ${authors[req.params.num].nationality}`);
});

app.get('/authors/:num/books', (req, res) => {
    const num = req.params.num - 1
    res.send(`${authors[num].books}`)
});

app.get('/json/authors/:num', (req, res) => {
    const num = req.params.num - 1
    const info = { name: authors[num].name, nationality: authors[num].nationality }
    res.json(info)
})

app.get('/json/authors/:num/books', (req, res) => {
    const num = req.params.num - 1
    const info = { books: authors[num].books }
    res.json(info)
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});