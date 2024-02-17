const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('It Works!!!\n2');
})

app.listen(80, () => {
    console.log('app running on port: 80');
});
