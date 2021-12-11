import Joi from 'joi';
require('dotenv').config();

// JOI驗證規則

// MYSQL_HOST=127.0.0.1
// MYSQL_PORT=3306
// MYSQL_USER=root
// MYSQL_PASS=my-secret-pw
// MYSQL_DATABASE=Community
const envVarSchema = Joi.object()
	.keys({
		NODE_ENV: Joi.string().default('development').allow('development', 'production'), // 字串且預設值為development 並只允許兩種參數
		PORT: Joi.number().default(8080), // 數字且預設值為 8080
		VERSION: Joi.string(), // 字串
		MYSQL_HOST: Joi.string(),
		MYSQL_PORT: Joi.number().default(3306),
		MYSQL_USER: Joi.string().default('root'),
		MYSQL_PASS: Joi.string(),
		MYSQL_DATABASE: Joi.string()
	})
	.unknown()
	.required();

// process.env 撈取 .env 內的變數做 joi 驗證
const { error, value: envVars } = envVarSchema.validate(process.env);

if (error) {
	throw new Error(`Config validation error: ${error.message}`);
}

const config = {
	version: envVars.VERSION, // 版本
	env: envVars.NODE_ENV, // 開發模式
	port: envVars.PORT, // 阜號
	mysqlHost: envVars.MYSQL_HOST,
	mysqlPort: envVars.MYSQL_PORT,
	mysqlUser: envVars.MYSQL_USER,
	mysqlPass: envVars.MYSQL_PASS,
	mysqlDatabase: envVars.MYSQL_DATABASE
};

export default config; // 匯出共用
