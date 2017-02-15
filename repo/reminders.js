import knex from './knexConfig';

async function saveReminder(reminder) {
	return await knex('recurringErrands').insert(reminder);
}

async function getReminders(userId) {
	let reminders = await knex('recurringErrands').select().where('userId', userId);
	reminders.forEach(r => {
		if(r.frequency === 1) {
			r.frequency = 'daily';
		} else if(r.frequency === 2) {
			r.frequency = "weekly"
		} else {
			r.frequency = 'monthly'
		}
	})
	return reminders;
}

async function editReminder(reminder) {
	return await knex('recurringErrands').update(reminder).where('id', reminder.id);
}

export {
	saveReminder,
	getReminders,
	editReminder
}


