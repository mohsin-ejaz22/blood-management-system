import { Router } from "express";
import UserController from "./controller/UserController.js";
import userRequestController from "./controller/userRequestController.js";


const router = Router();

//for User:
router.post("/user/create", UserController.createUser);
router.get("/users", UserController.showUsers);
router.get("/user/:id", UserController.showUser);
router.post("/user/edit/:id", UserController.editUser);
router.post("/user/delete/:id", UserController.deleteUser);

//for UserRequest:
router.post("/users/:id/userrequests/:user_ID", userRequestController.createuserrequest);
router.delete("/users/:id/userrequests/:userrequestId", userRequestController.deleteuserrequest);

export default router;