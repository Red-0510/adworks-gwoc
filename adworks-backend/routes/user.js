import express from "express";
import { loginUser,signUpUser, uploadProduct,getProducts } from "../controllers/user.js";

const router = express.Router();

router.get("/products",getProducts);

router.post("/login",loginUser);
router.post("/signup",signUpUser);
router.post("/add-product",uploadProduct);

export default router;