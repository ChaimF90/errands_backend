import knex from './knexConfig';
import * as hashHelpers from './hashHelpers';

const saltRounds = 10;

async function createUser(payload) {
	let hashedPassword = await hashHelpers.hashPassword(payload.password, saltRounds);
	let user = {
		email: payload.email,
		username: payload.username,
		password: hashedPassword
	}
	return await knex('users').insert(user);
}

async function login(payload) {
	let user = await knex('users').select().where('email', payload.credentials).orWhere('username', payload.credentials);
	if(!user.length) {
		return {
			error: 'User not found'
		}
	} else {
		user = user[0];
		let isMatch = await hashHelpers.comparePassword(payload.password, user.password);
		if(isMatch) {
			return user;
		} else {
			return {
				error: 'Password does not match'
			}
		}
	}
}

export {
  createUser,
  login
}





