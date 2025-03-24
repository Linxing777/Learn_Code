import dotenv from 'dotenv';
import OpenAI from "openai";
dotenv.config();
// console.log(process.env.OPENAI_API_KEY,'////');
// 示例化openai 客户端
const client = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
    baseURL: 'https://api.302.ai/v1' //转发
})

// 良好的编程风格
// 主函数  执行入口 单点
// 赋值语句

// 函数也是对象 函数表达式
// async 是函数修饰符 + await 一对
const main = async() => {
    // openai 的调用是异步的
    // await 等会
    // chat 聊天的调用
    // completions 完成的意思
    // create 创建
    try {
        const response = await client.chat.completions.create({
            model: 'gpt-4o',
            // 对话列表
            messages: [
                { 
                    role: 'user', // 角色
                    content: [
                        {
                            type: 'text',
                            'text': '请描述图片的内容'
                        },
                        {
                            type: 'image_url', 
                            "image_url": {
                               "url":"https://img.tukuppt.com/ad_preview/00/17/33/5c99ce064a68f.jpg!/fw/980" 
                            }
                        }
                    ]
                }
            ],
            max_tokens:300
    
        });
        console.log(response.choices[0].message.content);
    }catch (e) {
        console.log(e);
    }
  
    
}
// es6  箭头函数  传统函数更简洁
// 以下传统函数
// 函数声明
// function main(){node 

// }

main()


