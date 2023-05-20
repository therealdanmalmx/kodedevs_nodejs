import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as Jobs from '../controllers/jobs';


export const jobsRouter = express.Router();


jobsRouter.post('/',
    body("title").isString(),
    body("description").isString(),
    body("qualification").isString(),
    body("responsibilities").isString(),
    body("location").isString(),
    body("company_name").isString(),
    body("company_website").isString(),
    body("company_tagline").isString(),
    body("company_logo").isString(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array() });
        }
    try {
        const job = req.body;
        const newJob = await Jobs.createJob(job);
        return res
            .status(201)
            .json(newJob);

    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }

});

jobsRouter.put('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const job = req.body;
        const updatedJob = await Jobs.updateJob(id, job);
        return res
            .status(200)
            .json(updatedJob);

    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }
});

jobsRouter.get('/', async (req: Request, res: Response) => {
    try {
        const jobs = await Jobs.getAllJobs();
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
        const job: any = await Jobs.getJob(id);
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
        if (!id) {
            return res
            .status(404)
            .json({ message: `Job with id ${id} was not found` });
        }

        const job = await Jobs.deleteJob(id);
        return res.status(200).json(job);

    } catch (error) {

    }
});