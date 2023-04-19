import express from 'express';
import cors from 'cors';
import routes from './router';
import connection from './config/database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = 3000;

connection.then(() =>{
    console.log('database connection established')
    app.listen(port, () => {
        console.log(`Aplicação online: http://localhost:${port}`);
    });
}).catch((error) => console.log(error));

