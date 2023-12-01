import { Request, Response } from 'express';

const userLogin = async (req: Request, res: Response) => {
    res.send('Login worked');
};

export {
    userLogin
};