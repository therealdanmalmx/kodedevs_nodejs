import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { jobsRouter } from './src/routes/jobsRoutes';
import { authRouter } from './src/routes/authRoutes';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const app = express();
const PORT: number = parseInt(process.env.PORT as string, 10);

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobsRouter );
app.use('/api/auth', authRouter );


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});