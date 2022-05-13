import { Router } from "express";
import {
  getUserByIdOr404,
  verifyUserExists,
  verifyToken,
  userPermission,
} from "../middlewares";
import {
  deleteUserController,
  getAllUserController,
  getUserByIdController,
  insertUserController,
  loginController,
  updateUserController,
} from "../controllers";

const router = Router();

router.get("/users", getAllUserController);
router.get("/users/:uuid", getUserByIdOr404, getUserByIdController);
router.post("/users", verifyUserExists, insertUserController);
router.post("/login", loginController);

router.patch(
  "/users/:uuid",
  verifyToken,
  getUserByIdOr404,
  userPermission,
  updateUserController
);

router.delete("/users/:uuid", getUserByIdOr404, deleteUserController);

export default router;