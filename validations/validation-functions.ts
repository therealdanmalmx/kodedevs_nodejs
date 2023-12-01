import { body } from 'express-validator';

export const validateJobs = [
    body('title').notEmpty().isString(),
    body('description').isString(),
    body('qualification').isString(),
    body('responsibilities').isString(),
    body('location').isString(),
    body('company_name').isString(),
    body('company_website').isString(),
    body('company_tagline').isString(),
    body('company_logo').isURL({protocols: ['http', 'https']}),
]