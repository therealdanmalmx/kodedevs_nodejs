import { db } from '../utils/db.server';

export const createJob = async (req: any, res: any) => {
    const job = await db.jobs.create({
        data: { ...req.body}
    });
    return res.json(job);
}

export const getAllJobs = async (req: any, res: any) => {
    const jobs = await db.jobs.findMany({});
    return res.json(jobs);
}

export const getJob = async (req: any, res: any, id: string ) => {
    const job = await db.jobs.findUnique({
        where: {
            id,
        },
    });
    return res.json(job);
}

export const deleteJob = async (req: any, res: any, id: string ) => {
    const job = await db.jobs.delete({
        where: {
            id,
        },
    });
    return res.json(job);
}