import express from 'express';
import config from '../../config/config';
const router = express.Router();

router.get('/', function(req, res) {
	res.send(`This is api page http://localhost:${config.port}/api`);
});
router.get('/sqlTest', function(req, res) {});
export default router;
