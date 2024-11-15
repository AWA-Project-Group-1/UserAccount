require('dotenv').config();  // 加载 .env 文件中的变量

const { Pool } = require('pg');

// 使用环境变量配置数据库连接
const pool = new Pool({
    user: process.env.DDB_USER,        // 从环境变量中读取数据库用户名
    host: process.env.DB_HOST,         // 从环境变量中读取数据库主机
    database: process.env.DB_NAME,     // 从环境变量中读取数据库名称
    password: process.env.DB_PASSWORD, // 从环境变量中读取数据库密码
    port: process.env.DB_PORT,         // 从环境变量中读取数据库端口
});

module.exports = pool;
