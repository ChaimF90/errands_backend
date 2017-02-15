import knex from './knexConfig';

async function createErrand(errand) {
	let id = await knex('errands').insert(errand);
	let newErrand = await knex('errands').select().where('id', id).first();
	return newErrand;
}

async function editErrand(errand) {
	await knex('errands').update(errand).where('id', errand.id);
	return knex('errands').select().where('id', errand.id).first();
}

async function deleteErrand(id) {
	return await knex('errands').where('id', id).del();
}

async function markAsComplete(id) {
	return await knex('errands').update({isDone: true}).where('id', id);
}

async function getAllErrands(userId) {
	let allErrands = await knex('errands').select().where('userId', userId);
	return allErrands;
}

async function getErrandsPerCategory(categoryId) {
	let errands = await knex('errands').select().where({
		categoryId: categoryId,
		isDone: false
	});
	return errands;
}

export {
  createErrand,
  editErrand,
  deleteErrand,
  getAllErrands,
  getErrandsPerCategory,
  markAsComplete
}




