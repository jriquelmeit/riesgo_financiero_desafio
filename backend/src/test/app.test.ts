import { describe, expect, it} from "@jest/globals";
import request from 'supertest';

import {app} from '@/server'
import {findUserEmail} from "@/services/auth.service";
import {generateAccessToken} from "@/libs/jwt";

describe('Riesgo Financiero', () => {

    it('POST /login usuario admin', async () => {
        const response = await request(app)
            .post('/login')
            .send({
                email: "pedro@demo.cl",
                password: "1234"
            });
        expect(response.status).toBe(200);
        expect(response.body).not.toBeNull();
    });


    it('GET /score/58961604 con jwt admin', async () => {

        const user = await findUserEmail("pedro@demo.cl");
        const token = generateAccessToken(user.id, user.role, user.role === "user" ? user.rut : undefined);

        const response = await request(app)
            .get(`/score/${user.rut}`)
            .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("score")
    });

});
