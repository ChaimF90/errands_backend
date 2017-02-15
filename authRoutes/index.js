import express from 'express-promise-router';
const loginRouter = express();
const auth = require('./auth').router;

loginRouter.use('/users', auth);
export { loginRouter };