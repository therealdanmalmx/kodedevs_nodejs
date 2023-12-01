import { Request, Response } from 'express';

const userLogin = async (req: Request, res: Response) => {
    res.send('Login worked');
};

const userRegister = async (req: Request, res: Response) => {
    res.send('Register worked');
};

export {
    userLogin,
    userRegister,
};