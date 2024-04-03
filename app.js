const express = require('express');

const app = express();
let visitors = 0;
app.use((req, res, next) => {
    console.log(`Total visitors : ${++visitors} & request url is : ${req.url}`);
    next();
})
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listening on port 3000');
})