import jwt from 'jsonwebtoken';

function checkToken(req, res, next) {
	let token = req.headers['x-access-token'];
	if(token) {
		jwt.verify(token, process.env.AUTH_SECRET, function(err, decoded) {
			if(err) {
				return res.json({
					success: false,
					message: 'Token no good'
				})
			} else {
				req.userId = decoded.userId;
				next();
			}
		})
	} else {
		return res.status(403).send({
			success: false,
			message: 'no token'
		});
	}
}

export {
	checkToken
}