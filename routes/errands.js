import express from 'express-promise-router';
const router = express();
import db from '../repo';

router.post('/newErrand', async (req, res) => {
	let incomingErrand = req.body;
	incomingErrand.userId = req.userId;
	let errand = await db.errands.createErrand(incomingErrand);
	res.json(errand);
})

router.post('/editErrand', async (req, res) => {
	let errand = await db.errands.editErrand(req.body)
	res.json(errand);
})

router.post('/deleteErrand', async (req, res) => {
	await db.errands.deleteErrand(req.body.id);
	res.json('success');
})

router.post('/completeErrand', async(req, res) => {
	await db.errands.markAsComplete(req.body.id);
	res.json('success');
})

router.get('/errandsByCategory', async (req, res) => {
	let errands = await db.errands.getErrandsPerCategory(req.query.id);
	res.json(errands);
})

router.get('/getAllErrands', async (req, res) => {
	res.json(await db.errands.getAllErrands(req.userId));
})


export { router }
