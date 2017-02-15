import knex from './knexConfig';

async function createCategory(category) {
	let id = await knex('categories').insert(category);
	let newCategory = await knex('categories').select().where('id', id).first();
	return newCategory;
}

async function getAllCategories(userId) {
	let data = await knex('categories')
	.leftJoin('errands', 'errands.categoryId', '=', 'categories.id')
	.select('errands.id as errandsId', 
		'categories.id', 
		'errands.title', 
		'errands.description', 
		'categories.name',
		'errands.isDone')
	.where({
		'categories.userId':userId
	});
	let response = data.reduce((prev, current) => {
		if(prev.length) {
			let currentCat = prev.find(c => c.id === current.id);
			if(currentCat) {
				if(!current.isDone && current.errandsId) {
					let errand = {
						id: current.errandsId,
						title: current.title,
						description: current.description,
						isDone: current.isDone
					};
					currentCat.errands.push(errand);
				}
				return prev;
			} else {
				let category = {
					name: current.name,
					id: current.id,
					errands: []
				}
				if(!current.isDone && current.errandsId) {
					let errand = {
						id: current.errandsId,
						title: current.title,
						description: current.description,
						isDone: current.isDone
					};
					category.errands.push(errand);
				}
				prev.push(category);
				return prev;
			}
		} else {
			let category = {
				name: current.name,
				id: current.id,
				errands: []
			}
			if(!current.isDone && current.errandsId) {
				let errand = {
					id: current.errandsId,
					title: current.title,
					description: current.description,
					isDone: current.isDone
				};
				category.errands.push(errand);
			}
			prev.push(category);
			return prev;
		}

	},[])

	return response;
}

async function deleteCategory(id) {
	return await knex('categories').where('id', id).del();
}

export {
  createCategory,
  getAllCategories,
  deleteCategory
}