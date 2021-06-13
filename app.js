const express = require('express');
 const bodyParser = require("body-parser");
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());
app.use(cors());

const config = {
    PORT: process.env.PORT || '3000',
    ENV: process.env.NODE_ENV || 'development',
}

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: 'API is Already Running...'
    });
});

app.use('/api', routes);

// app.listen(5000, () => {
//     console.log(`Listening to port 5000`);
// });

app.listen(config.PORT, () => {
    console.log(`starting ${config.ENV} server at http://localhost:${config.PORT}`);
});

// catch 404 and forward to error handler



