import {Router} from "express";

import {score} from '@/controllers/score.controller';
import authenticate from "@/middlewares/authenticate";
import authorization from "@/middlewares/authorization";

const router = Router();

router.get("/score/:rut", authenticate, authorization, score);

export default router;
