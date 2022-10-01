import express, { Router } from "express";
import { UserRouters } from "./usuarios.routes.js";

const router = express.Router();

router.use('/users', UserRouters);


export const IndexRouter = router;