import  Express  from "express";
import { getSales } from "../controllers/sales.js";
const router = Express.Router()

router.get("/sales", getSales)
export default router;