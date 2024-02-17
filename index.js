const express = require('express');
const app = express();

const VERSION = 3

app.get('/', (req, res) => {
    res.end(`It Works!\nVERSION: ${VERSION}`);
})

app.listen(80, () => {
    console.log('app running on port: 80');
});
