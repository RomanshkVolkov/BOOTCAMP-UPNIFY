import { Router } from "express";
import * as UsersController from '../controllers/users.controller.js';
import { verifyToken } from '../middlewares/auth.js';

const router = Router();

router.get('/', verifyToken, UsersController.getUsers);
router.post('/login', UsersController.login);


export const UserRouters = router;