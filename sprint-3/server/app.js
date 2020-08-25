const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/', apiRoutes)

app.listen(8080, () => console.log(`listening at: http://localhost:8080`))