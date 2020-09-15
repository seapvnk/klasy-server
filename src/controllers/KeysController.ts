import { Request, Response } from 'express';
import db from '../database/connection';

export default class KeysController {
    async index(request: Request, response: Response): Promise<Response> {
        const keys = await db('keys');
        return response.json(keys);
    }


    async create(request: Request, response: Response): Promise<Response> {
        const { password, quantity, type } = request.body;
        await db('keys').insert({
            password, quantity, type
        })

        return response.status(201).send();
    }
}