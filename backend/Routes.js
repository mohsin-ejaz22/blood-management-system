import { Router } from "express";
import UserController from "./controller/UserController.js";
import UserRequestController from "./controller/UserRequestController.js";

const router = Router();

//for User:
router.post("/user/create", UserController.createUser);
router.get("/users", UserController.showUsers);
router.get("/user/:id", UserController.showUser);
router.post("/user/edit/:id", UserController.editUser);
router.post("/user/delete/:id", UserController.deleteUser);

//
router.post("/user/login", UserController.Login);
router.get("/user/logout", UserController.Logout);

//for UserRequest:
router.post("/users/:id/userrequests", UserRequestController.createuserrequest);
router.delete("/users/:id/userrequests/:userrequestId", UserRequestController.deleteuserrequest);

//...

export default router;