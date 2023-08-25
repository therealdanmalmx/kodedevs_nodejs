import express from 'express';
import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import * as JobsService from './jobs.service';

export const jobsRouter = express.Router();

// GET all jobs
jobsRouter.get('/jobs', async (req: Request, res: Response) => {
    try {
        const jobs = await JobsService.listJobs();
        res.status(200).json(jobs);
    } catch (error: any) {
        res.status(500).json(error.message);
    }
});

// GET single job
jobsRouter.get('/:id', async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        const jobs = await JobsService.listJob(id);

        if (jobs) {
            return res.status(200).json(jobs);
        }
        return res.status(404).json("Job could not be found");

    } catch (error: any) {
        return res.status(500).json(error.message);
    }
});

// POST create a post
jobsRouter.post(
    '/',
    body('title').isString(),
    body('description').isString(),
    body('qualification').isString(),
    body('responsibilities').isString(),
    body('location').isString(),
    body('company_name').isString(),
    body('company_website').isString(),
    body('company_tagline').isString(),
    body('company_logo').isURL({protocols: ['https']}),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array() });
        }
        try {
            const job = req.body;
            const newJob = await JobsService.createJob(job);
            return res
                .status(201)
                .json(newJob);
        } catch (error: any) {
            return res
                .status(500)
                .json({ message: error.message });
        }
});

// PUT update a post
jobsRouter.put(
    '/:id',
    body('title').isString(),
    body('description').isString(),
    body('qualification').isString(),
    body('responsibilities').isString(),
    body('location').isString(),
    body('company_name').isString(),
    body('company_website').isString(),
    body('company_tagline').isString(),
    body('company_logo').isURL({protocols: ['https']}),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array() });
        }
        const id: string = req.params.id;
        try {
            const job = req.body;
            const updatedJob = await JobsService.updateJob(id, job);
            return res
                .status(200)
                .json(updatedJob);
        } catch (error: any) {
            return res
                .status(500)
                .json({ message: error.message });
        }
});

// DELETE remove a post
jobsRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await JobsService.deleteJob(id);
        return res
            .status(204)
            .json("Job has been successfullty deleted");
    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }
});