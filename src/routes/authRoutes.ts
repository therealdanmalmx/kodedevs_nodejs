import { Router } from "express";

import { userLogin, userRegister } from '../controllers/authController';


const authRouter: Router = Router();

authRouter.get('/login', userLogin);
authRouter.get('/signup', userRegister);

export { authRouter };

