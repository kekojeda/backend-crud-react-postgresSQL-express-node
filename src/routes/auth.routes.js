import { Router } from "express"
import { getProfile, logout, signin, signup } from "../controllers/auth.controller.js";

const router = Router();


router.post('/signin', signin)

router.post('/signup', signup)

router.post('/logout', logout)

router.get('/profile', getProfile)





export default router