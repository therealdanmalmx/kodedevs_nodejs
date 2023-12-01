import type { Request, Response } from 'express';
import { Result, body, validationResult } from 'express-validator';

export const validateJobs = [
    body('title').notEmpty().withMessage('Title is required').isString().trim().withMessage('Only strings allowed').escape(),
    body('description').notEmpty().withMessage('Description is required').isString().trim().withMessage('Only strings allowed').escape(),
    body('qualification').notEmpty().withMessage('Qualifications are required').isString().trim().withMessage('Only strings allowed').escape(),
    body('responsibilities').notEmpty().withMessage('Responsibilities are required').isString().trim().withMessage('Only strings allowed').escape(),
    body('location').notEmpty().withMessage('Location is required').isString().trim().withMessage('Only strings allowed').escape(),
    body('company_name').notEmpty().withMessage('Company name is required').isString().trim().withMessage('Only strings allowed').escape(),
    body('company_website').notEmpty().withMessage('Company website link is required').isString().trim().withMessage('Only strings allowed').escape(),
    body('company_tagline').notEmpty().withMessage('Company tagline is required').isString().trim().withMessage('Only strings allowed').escape(),
    body('company_logo').notEmpty().withMessage('Company logo is required').isURL({protocols: ['http', 'https']}).trim().escape(),
];

export const showValidationErrors = (req: Request, res: Response) => {
    const errors: Result = validationResult(req);
    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json({ errors: errors.array() });
    }
}