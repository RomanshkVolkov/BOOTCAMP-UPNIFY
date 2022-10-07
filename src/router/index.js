import express, { Router } from "express";
import { UserRouters } from "./usuarios.routes.js";
import { CategoryRouters } from "./categories.routes.js";
import { AccountsRouters } from "./accounts.routes.js";

const router = express.Router();

router.use('/users', UserRouters);

router.use('/categories', CategoryRouters);

router.use('/accounts', AccountsRouters);


export const IndexRouter = router;