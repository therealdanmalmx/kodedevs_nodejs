import { db } from '../../utils/db.server';


type Jobs = {
    title: string;
    description: string;
    qualification: string;
    responsibilities: string;
    location: string;
    company_name: string;
    company_website: string;
    company_tagline: string;
    company_logo: string;
};

// GET ALL JOBS
export const listJobs = async (): Promise<Jobs[]> => {
    return db.jobs.findMany();
};

// GET SINGLE JOB
export const listJob = async (id: string): Promise<Jobs | null> => {
    return db.jobs.findUnique({
        where: {
            id,
        }
    });
};

// CREATE JOB
export const createJob = async (job: Jobs): Promise<Jobs> => {
    const { title, description, qualification, responsibilities, location, company_name, company_website, company_tagline, company_logo } = job
    return db.jobs.create({
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
};

// UPDATE JOB
export const updateJob = async (id: string, job: Jobs): Promise<Jobs | null> => {
    const { title, description, qualification, responsibilities, location, company_name, company_website, company_tagline, company_logo } = job;
    return db.jobs.update({
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
};

export const deleteJob = async (id: string): Promise<Jobs | null> => {
    return db.jobs.delete({
        where: {
            id,
        },
    });
};