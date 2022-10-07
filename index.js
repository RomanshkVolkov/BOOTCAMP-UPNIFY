import express from 'express';
import bodyParser from 'body-parser';

import { IndexRouter } from './src/router/index.js';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config();



const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', IndexRouter);
app.listen(process.env.PORT, () => {
   console.log(`Server started on port ${process.env.PORT || 3000}`);
})