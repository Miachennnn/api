import express from 'express';
import index from './server/routes/index.route';
import config from './config/config';
import bodyParser from 'body-parser';

const app = express();

app.get('/', (req, res) => {
	res.send(`This is http://localhost:${config.port}/`);
});

app.use('/api', index);

//TODO console
app.listen(3000);
export default app;
