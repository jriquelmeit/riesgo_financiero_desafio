import type { Request, Response } from "express";
import {calculate} from "@/services/score.service";
import {formatRut} from "@/libs/utils";

export const score = async (req: Request, res: Response): Promise<void> => {
    try {
        const date = new Date();
        const { rut } = req.params as { rut: string };
        const scope = await calculate(rut)

        res.status(200).json({
            "rut": formatRut(rut),
            "score": scope,
            "fecha": date.toISOString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

