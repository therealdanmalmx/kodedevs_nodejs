import type { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import prisma from '../db/db.server';

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await prisma.jobs.findMany();

        return res.status(200).json(jobs);

    } catch (error: any) {
        res.status(500).json(error.message);
    }
}

const getSingleJob = async (req: Request, res: Response) => {
        const id: string = req.params.id;

        try {
            const jobs = await prisma.jobs.findUnique({
                where: {
                    id,
                }
            });

            if (!jobs) {
                return res.status(404).json("Job could not be found");
            }

            return res.status(200).json(jobs);

        } catch (error: any) {
            return res.status(500).json(error.message);
        }
};

const createJob = async (req: Request, res: Response) => {
    body('title').isString();
    body('description').isString();
    body('qualification').isString();
    body('responsibilities').isString();
    body('location').isString();
    body('company_name').isString();
    body('company_website').isString();
    body('company_tagline').isString();
    body('company_logo').isURL({protocols: ['http', 'https']});

    const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array() });
        }
        try {
            const job = req.body;
            const newJob = await prisma.jobs.create(job);
            return res
                .status(201)
                .json(newJob);
        } catch (error: any) {
            return res
                .status(500)
                .json({ message: error.message });
        }
};

const updateJob = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    const id: string = req.params.id;

    body('title').isString();
    body('description').isString();
    body('qualification').isString();
    body('responsibilities').isString();
    body('location').isString();
    body('company_name').isString();
    body('company_website').isString();
    body('company_tagline').isString();
    body('company_logo').isURL({protocols: ['http', 'https']});

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array() });
        }

        try {
            const job = req.body;
            const updatedJob = await prisma.jobs.update({
                where: {
                    id,
                },
                data: job,
            });
            return res
                .status(200)
                .json(updatedJob);
        } catch (error: any) {
            return res
                .status(500)
                .json({ message: error.message });
        }
};

const deleteJob = async (req: Request, res: Response) => {
    const id: string = req.params.id;

    try {
        await prisma.jobs.delete({
            where: {
                id,
            }
        });
        return res
            .status(200)
            .json({ message: "Job deleted successfully" });
    } catch (error: any) {
        return res
            .status(500)
            .json({ message: error.message });
    }
};

export {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob,
};

