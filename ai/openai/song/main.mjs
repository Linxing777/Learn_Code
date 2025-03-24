// 基于openai 大模型的开发
import OpenAI from 'openai';
import { getMultipartRequestOptions } from 'openai/_shims/index.mjs';

// 实例化Openai
const openai = new OpenAI({
    //付费
    apiKey: 'sk-5PUDrQhFqCVr0KluhSbYcCgIx6S21dNcxGJ0xhpo3BEtIhRw',
    baseURL: 'https://api.302.ai/v1'
});

const response = await openai.completions.create({
    model: 'gpt-3.5-turbo-instruct',
    prompt: '加入你是林夕这样的爱情歌曲作词家，请为以爱上心爱之人为主题的爱情歌曲写一段RAP歌词。',
    // messages: [
    //     { role: 'system', content: 'You are a helpful assistant.' },
    //     { role: 'user', content: 'Hello!' }
    // ]
});
console.log(response);