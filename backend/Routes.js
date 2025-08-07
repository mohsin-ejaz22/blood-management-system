import { Router } from "express";
import UserController from "./controller/UserController";


const router = Router();

//for User
router.post("/user/create", UserController.createUser);
router.get("/users", UserController.showUsers);
router.get("/user/:id", UserController.showUser);
router.post("/user/edit/:id", UserController.editUser);
router.post("/user/delete/:id", UserController.deleteUser);

export default router;