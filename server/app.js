const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server initialized')
})

app.listen(PORT, () => console.log(`App is listening on ${PORT}`))