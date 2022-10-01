import express, { Router } from "express";
import { UserRouters } from "./usuarios.routes.js";
import { CategoryRouters } from "./categories.routes.js";

const router = express.Router();

router.use('/users', UserRouters);
router.use('/categories', CategoryRouters);


export const IndexRouter = router;