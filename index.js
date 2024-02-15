const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('It works!\n');
})

app.listen(3000, () => {
    console.log('app running on port 3000');
});
