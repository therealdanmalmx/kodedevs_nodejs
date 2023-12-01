import type { Request, Response } from 'express';
import { showValidationErrors } from '../validations/validation-utilities';
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
    if (showValidationErrors(req, res)) {
        return;
    }
    try {
    const {title, description, qualification, responsibilities, location, company_name, company_website, company_tagline, company_logo} = req.body;
    const newJob = await prisma.jobs.create({
        data: {
            title,
            description,
            qualification,
            responsibilities,
            location,
            company_name,
            company_website,
            company_tagline,
            company_logo,
        },
    });
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
    if (showValidationErrors(req, res)) {
        return;
    }
    const id: string = req.params.id;
    try {
        const job = await prisma.jobs.findUnique({
            where: {
                id,
            }
        });

        if (!job) {
            return res
                .status(404)
                .json({ message: "Job not found" });
        }
        const {title, description, qualification, responsibilities, location, company_name, company_website, company_tagline, company_logo} = req.body;
        const updatedJob = await prisma.jobs.update({
            where: {
                id: job.id,
            },
            data: {
                title,
                description,
                qualification,
                responsibilities,
                location,
                company_name,
                company_website,
                company_tagline,
                company_logo,
            },
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

