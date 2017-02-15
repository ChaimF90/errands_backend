import express from 'express-promise-router';
const router = express();
import db from '../repo';

router.post('/newCategory', async (req, res) => {
	let newCat = req.body;
	newCat.userId = req.userId;
	let category = await db.categories.createCategory(req.body);
	res.json(category);
})

router.get('/getAllCategories', async (req, res) => {
	let allCategories = await db.categories.getAllCategories(req.userId);
	res.json(allCategories);
})

router.post('/deleteCategory', async (req, res) => {
	await db.categories.deleteCategory(req.body.id);
	res.json('success');
})


export { router }
