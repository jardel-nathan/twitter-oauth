import express, { json } from 'express'
import routes from './routes';
import cors from 'cors';
import 'dotenv/config';

const app = express();
app.use(cors())

app.use(express.json()); // express.json: é usado para converter o body em json

app.use(routes)// use: é um middleware

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});