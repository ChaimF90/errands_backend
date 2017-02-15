import express from 'express-promise-router';
const router = express();
import db from '../repo';

router.post('/newReminder', async (req, res) => {
	let newReminder = req.body;
	newReminder.userId = req.userId;
	let results = await db.reminders.saveReminder(newReminder);
	res.json(results);
})

router.get('/getReminders', async (req, res) => {
	let allReminders = await db.reminders.getReminders(req.userId);
	res.json(allReminders);
})

router.post('/editReminder', async (req, res) => {
	await db.reminders.editReminder(req.body);
	res.json('success');
})

export { router }
