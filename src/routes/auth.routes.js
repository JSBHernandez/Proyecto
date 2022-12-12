import { router } from "express"
const router = Router()

import * as authCtrl from "../controllers/auth.controller"

router.post("/sign up", authCtrl.signup)
router.post("/sign in", authCtrl.signin)

export default router;