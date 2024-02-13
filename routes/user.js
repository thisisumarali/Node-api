import express from "express";
import {
  getAlluser,
  getMyprofile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/all", getAlluser);

router.post("/new", register);

router.post("/login", login);
router.get("/logout", logout);

router.get("/me", isAuthenticated, getMyprofile);

export default router;
