import type { Request, Response } from 'express';
import { Result, body, validationResult } from 'express-validator';

export const validateJobs = [
    body('title').notEmpty().isString().trim().escape(),
    body('description').notEmpty().isString().trim().escape(),
    body('qualification').notEmpty().isString().trim().escape(),
    body('responsibilities').notEmpty().isString().trim().escape(),
    body('location').notEmpty().isString().trim().escape(),
    body('company_name').notEmpty().isString().trim().escape(),
    body('company_website').notEmpty().isString().trim().escape(),
    body('company_tagline').notEmpty().isString().trim().escape(),
    body('company_logo').notEmpty().isURL({protocols: ['http', 'https']}).trim().escape(),
];

export const showValidationErrors = (req: Request, res: Response) => {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array() });
    }
}