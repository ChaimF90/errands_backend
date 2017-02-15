import express from 'express-promise-router';
const router = express();
const categories = require('./categories').router;
const errands = require('./errands').router;
const reminders = require('./reminders').router;

router.use('/categories', categories);
router.use('/errands', errands);
router.use('/reminders', reminders);
export { router };
