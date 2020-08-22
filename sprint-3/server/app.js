const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes')


app.use(express.json());

app.use('/', apiRoutes)

// application listener
app.listen(8080, () => console.log(`listening at: http://localhost:8080`))