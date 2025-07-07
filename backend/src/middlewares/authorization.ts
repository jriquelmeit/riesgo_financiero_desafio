
import {Response, Request, NextFunction} from "express";


const authorization = (req: Request, res: Response, next: NextFunction) => {

    const { rut } = req.params as { rut: string };
    const user = req.user;

    if(!rut || !user){
        res.status(500).json({ error: 'Internal server error' });
        return
    }

    if(user.role !== "user" || user.rut !== rut){
        res.status(401).send("Not authorized");
    }

    return next();
}

export default authorization
