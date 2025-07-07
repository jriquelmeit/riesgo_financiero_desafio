import express from 'express';
import cors from 'cors';

import config from '@/config';
import authRouter from '@/routes/auth.routes';
import scoreRouter from '@/routes/score.routes';


export const app = express()

app.use(cors())
app.use(express.json());


app.use(authRouter);
app.use(scoreRouter);

app.listen(config.PORT, () => {
    console.log(`URL servidor http://localhost:${config.PORT}`);
})
