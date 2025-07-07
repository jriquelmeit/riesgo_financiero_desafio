import * as express from 'express';
import {JwtPayload} from "@/models/user";

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload
        }
    }
}
