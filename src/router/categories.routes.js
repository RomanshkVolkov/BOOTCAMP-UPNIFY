import { Router } from "express";
import * as CategoryController from '../controllers/categories.controller.js';
import { verifyToken } from '../middlewares/auth.js';

const router = Router();

router.route('/')
.get( CategoryController.getCategorias)
.post(CategoryController.createCategoria);
router.route('/:id')
.get( CategoryController.getCategory)
.put( CategoryController.updateCategoria)
.delete( CategoryController.deleteCategoria);


export const CategoryRouters = router;