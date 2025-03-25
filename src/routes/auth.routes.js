import { Router } from "express"
import { getProfile, logout, signin, signup } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();


router.post('/signin', signin)

router.post('/signup', signup)

router.post('/logout', logout)

router.get('/profile', isAuth, getProfile)





export default router