import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as Jobs from '../controllers/jobs';


export const jobsRouter = express.Router();


jobsRouter.post('/',  async (req: Request, res: Response) => {
    try {
        const job = await Jobs.createJob(req, res);
        return res
            .status(201)
            .json(job);

    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }

});


jobsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const jobs = await Jobs.getAllJobs(req, res);
        return res
            .status(200)
            .json(jobs);

    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }

});

jobsRouter.get('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const job: any = await Jobs.getJob(req, res, id);
        if (job) {
            return res
                .status(200)
                .json(job);
        }

    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }
});

jobsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const job = await Jobs.deleteJob(req, res, id);
        if (!id) {
            return res
                .status(404)
                .json({ message: `Job with id ${id} was not found` });
        }
        return res.status(200).json(job);

    } catch (error) {

    }
});