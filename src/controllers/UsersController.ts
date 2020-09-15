import { Request, Response } from 'express';
import db from '../database/connection';

export default class UsersController {
    async index(request: Request, response: Response): Promise<Response> {
        const users = await db('users');
        return response.json(users);
    }

    async create(request: Request, response: Response): Promise<Response> {
        const { name, username, bio, password, key } = request.body;


        const trx = await db.transaction();

		try {
            const keyData = await trx('keys').where('password', key);
            let { keyId, type, quantity } = keyData[0];

			await trx('users').insert({
                name, 
                username, 
                bio, 
                password, 
                type
            });
            
            quantity--;
            if (quantity == 0) {
                await trx('keys').delete(keyId);
            } else {
                await trx('keys').update({
                    password: key,
                    type,
                    quantity                
                });
            }
			await trx.commit();

			return response.status(201).send();
		} catch (error) {
			await trx.rollback();
			return response.status(400).json({
				error: 'Erro ao criar usuário',
			});
		}
    }
}