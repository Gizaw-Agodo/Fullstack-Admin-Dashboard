import  Express  from "express";
import { getAdmins } from "../controllers/management.js";
const router = Express.Router()

router.get("/admins", getAdmins)
export default router;