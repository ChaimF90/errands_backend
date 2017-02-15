import './dotenv';
import express from 'express';
const app = express();
import {router} from './routes';
import {loginRouter} from './authRoutes';
import bodyParser from 'body-parser';
import cors from 'cors';
import {checkToken} from './authMiddleware';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//app.use('/api', router);
app.use('/api', checkToken, router);
app.use('/auth', loginRouter);

app.get('/', async (req, res) => {
	res.json('whoo');
})

let port = 4000 || process.env.PORT;
app.listen(port);
console.log('server is running on port ' + port);
