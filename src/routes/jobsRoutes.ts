import { Router } from "express";
import { validateJobs } from '../utilities/validations/validation-utilities';

const jobsRouter: Router = Router();

import {
    createJob,
    deleteJob,
    getAllJobs,
    getSingleJob,
    updateJob
} from '../controllers/jobsController';

jobsRouter
    .get('/', getAllJobs)
    .post('/', validateJobs, createJob);

    jobsRouter
    .get('/:id', getSingleJob)
    .patch('/:id', validateJobs, updateJob)
    .delete('/:id', deleteJob);

export { jobsRouter };

