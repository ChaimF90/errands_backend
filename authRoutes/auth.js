import express from 'express-promise-router';
const router = express();
import db from '../repo';
import jwt from 'jsonwebtoken';

router.post('/create', async (req, res) => {
	await db.users.createUser(req.body);
	res.json('you can now log in');
})

router.post('/login', async (req, res) => {
	let result = await db.users.login(req.body);
	if(result.email) {
		let token = jwt.sign({userId: result.id}, process.env.AUTH_SECRET, {
			expiresIn : 60*60*24
		});

		res.json({
			success: true,
			message: 'Enjoy your token',
			token: token
		});

	} else {
		res.json('whoops something went wrong');
	}
})

export { router }