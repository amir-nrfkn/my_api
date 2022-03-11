const express = require('express');
const app = express();

sk_test_key = process.env.API_KEY;


const stripe = require('stripe')('sk_test_key')

app.get('/api', (req, res) => {
    // storing api key in url isnt great,
    // consider storing it in header
    const apiKey = req.query.apiKey;

    // TODO validate api key
    // TODO bill user for usage
    res.send({ data: 'This is an API!' });
});

app.post('/checkout', )


app.listen(8080, () => console.log('alive on http://localhost:8080'));

