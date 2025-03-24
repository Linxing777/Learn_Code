import OpenAI  from "openai";
import dotenv from "dotenv";
dotenv.config();
const clien = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_BASE_URL
});

//es6 默认参数值
//通用LLM 聊天完成接口函数 复用
const getCompletion = async (prompt, model = "gpt-3.5-turbo") => {
  const messages = [{ role: "user", content: prompt }];
  // AIGC chat 接口
  const response = await clien.chat.completions.create({
    model: model,
    messages: messages,
    temperature: 0, // 模型输出的随机性
  });
  return response.choices[0].message.content;
}


const main = async () => {
  const prod_review = ``;
  const prompt = `'''${prompt}'''`;
  const response = await getCompletion(prompt,'gpt-3.5-turbo');
  console.log(response);
}