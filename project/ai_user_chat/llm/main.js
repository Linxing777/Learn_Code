// node 内置的http模块
// 提供了http服务器和客户端功能
// import OpenAI from "openai";
const http = require('http');
const OpenAi = require('openai');
const url = require('url');// node 内置

require('dotenv').config();

const openai_api_key = process.env.OPENAI_API_KEY;
const openai_api_base_url = process.env.OPENAI_API_BASE_URL;

const client = new OpenAi({
    apiKey:openai_api_key,
    baseURL: openai_api_base_url //转发
})

//通用LLM 聊天完成接口函数 复用
const getCompletion = async (prompt, model = "deepseek-chat") => {
    const messages = [{ role: "user", content: prompt }];
    // AIGC chat 接口
    const response = await client.chat.completions.create({
      model: model,
      messages: messages,
      temperature: 0.1, // 模型输出的随机性
    });
    return response.choices[0].message.content;
  }

const server = http.createServer(async (req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*'); // 允许所有来源访问，也可以指定具体的域名，如'http://example.com'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // 允许的请求方法
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // 允许的请求头
    

    const parsedUrl = url.parse(req.url, true);
    const queryObj = parsedUrl.query;
    console.log(parsedUrl.query);
    const prompt = `
    ${queryObj.data}
    请根据上面的JSON数据,回答${queryObj.question} 这个问题
    `
    const result = await getCompletion(prompt);
    let info ={
      result
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify(info));
})
  

server.listen(1314);
