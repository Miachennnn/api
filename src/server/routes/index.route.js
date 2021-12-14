import express from 'express';
import config from '../../config/config';
import article from './article.route';
const router = express.Router();
import bodyParser from 'body-parser';

router.get('/', (req, res) => {
	res.send(`This is api page http://localhost:${config.port}/api`);
});
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use('/article', article);
export default router;
