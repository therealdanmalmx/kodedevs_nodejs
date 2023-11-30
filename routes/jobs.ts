import express from 'express';
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
    .post('/', createJob);

    router
    .get('/:id', getSingleJob)
    .patch('/:id', updateJob)
    .delete('/:id', deleteJob);

export { router as jobsRouter};
