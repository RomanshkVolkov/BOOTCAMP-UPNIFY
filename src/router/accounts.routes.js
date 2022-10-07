import { Router } from "express";
import * as accountsController from '../controllers/accounts.controller.js';

const router = Router();

router.get('/', accountsController.getAccounts);

export const AccountsRouters = router;