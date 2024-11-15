require('dotenv').config();  // 加载 .env 文件中的变量

const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

// CORS 配置，允许前端的 http://localhost:3000 请求后端
app.use(cors({
    origin: 'http://localhost:3000',  // 前端的地址
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true  // 支持跨域带上 cookie
}));

// 解析 JSON 请求体
app.use(express.json());

// 使用身份验证路由
app.use('/api/auth', authRoutes);

// 启动服务
const PORT = process.env.PORT || 5000;  // 你可以从 .env 文件中设置端口，若没有则使用 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
