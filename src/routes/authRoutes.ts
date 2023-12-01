import { Router } from "express";

import { userLogin } from '../controllers/authController';


const authRouter: Router = Router();

authRouter.get('/login', userLogin);

export { authRouter };

