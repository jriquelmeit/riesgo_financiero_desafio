import type { Request, Response } from "express";
import {findUserEmail} from "@/services/auth.service";
import {generateAccessToken} from "@/libs/jwt";
import {encryptPassword} from "@/libs/authentication";

export const login = async (req: Request, res: Response): Promise<void> => {

    const {email, password} = req.body
    if (!email || !password) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return
    }
    const user = await findUserEmail(email);

    if(!user || encryptPassword(password) != user.password) {
        res.status(401).json({ error: 'Credenciales inválidas' });
        return
    }

    const accessToken = generateAccessToken(user.id, user.role, user.role === "user" ? user.rut : undefined);

    res.status(200).json({accessToken})

}
