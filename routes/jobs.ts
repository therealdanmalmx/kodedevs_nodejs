import express from 'express';
import { validateJobs } from '../validations/validation-functions';

const router = express.Router();

import {
    getAllJobs,
    getSingleJob,
    createJob,
    updateJob,
    deleteJob
} from '../controllers/jobsController';

router
    .get('/', getAllJobs)
    .post('/', validateJobs, createJob);

    router
    .get('/:id', getSingleJob)
    .patch('/:id', validateJobs, updateJob)
    .delete('/:id', deleteJob);

export { router as jobsRouter};
