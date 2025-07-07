
import {Response, Request, NextFunction} from "express";
import {verifyAccessToken} from "@/libs/jwt";
import {JsonWebTokenError, TokenExpiredError} from "jsonwebtoken";
import {JwtPayload} from "@/models/user";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader?.startsWith("Bearer ")){
        res.status(401).send("Not authorized");
    }
    const token = authHeader?.split(' ')[1] as string;
    try{
        const tokenPayload = verifyAccessToken(token) as { user: JwtPayload}
        req.user = tokenPayload.user

    }catch (e){
        if (e instanceof TokenExpiredError) {
            res.status(401).send("Not authorized");
            return
        }
        if (e instanceof JsonWebTokenError) {
            res.status(401).send("Not authorized");
            return
        }
        res.status(500).send("Internal server error");
    }
    return next();
}

export default authenticate
