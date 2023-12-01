import { Router } from "express";

import {
    userLogin,
    userRegister
} from '../controllers/authController';

const authRouter: Router = Router();

authRouter
    .get('/login', userLogin)
    .get('/signup', userRegister);

export { authRouter };

