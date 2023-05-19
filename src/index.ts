import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
