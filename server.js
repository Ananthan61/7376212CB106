const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.post('/average', (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers)) {
        return res.status(400).send({ error: 'Input must be an array of numbers.' });
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    const prime = numbers.reduce((a, b) => a % b, 0);
    const sub = numbers.reduce((a, b) => a - b, 0);
    const average = (sum,prime,sub) / numbers.length;

    res.send({ average });
});
const port = process.env.PORT || 9876;
app.listen(port, () => console.log(`Server running on port ${port}`));