import { db } from '../utils/db.server';

export const createJob = async (job: any) => {
    const { title, description, qualification, responsibilities, location, company_name, company_website, company_tagline, company_logo } = job;
    return await db.jobs.create({
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
}

export const updateJob = async (id: string, job: any ) => {
    const { title, description, qualification, responsibilities, location, company_name, company_website, company_tagline, company_logo } = job;
    return await db.jobs.update({
        where: {
            id,
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
}

export const getAllJobs = async () => {
    return await db.jobs.findMany({});
}

export const getJob = async (id: string ) => {
    return await db.jobs.findUnique({
        where: {
            id,
        },
    });
}

export const deleteJob = async (id: string ) => {
    return await db.jobs.delete({
        where: {
            id,
        },
    });
}