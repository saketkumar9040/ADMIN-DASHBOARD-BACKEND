import express from "express";
import { fetchData } from "../controllers/controller.js";

const router = express.Router();

router.route("/data").post(fetchData)

export default router;
