import { Router } from "express";
import { CreateUserController } from '../src/controllers/createUserController'

const router = Router();

const createUserController = new CreateUserController();

router.post("/users", createUserController.handle)

export {router}