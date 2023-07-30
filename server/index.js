const express = require('express');
const { chats } = require('./data/data');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')

dotenv.config();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running");
});

// Get ALL fake data
app.get('/api/chat', (req, res) => {
    res.send(chats);
})

// Get by Id
app.get('/api/chat/:id', (req, res) => {
    const singleChat = chats.find((chatId) => chatId._id === req.params.id);
    res.send(singleChat);
})

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server running on ${PORT}`));