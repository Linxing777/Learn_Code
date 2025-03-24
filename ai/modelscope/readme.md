# 魔搭社区
 - AI模型开发平台

## 大模型 LLM Large(参数规模) Language Model
- 输入 -> code 编程 -> 输出
- 输入 promot —> LLM -> 输出

-首选大模型
  选择适合的大模型：
    openai 
    coze 豆包 qwen kimi 

- 云端AI环境
- 机器学习 nlp
- python 的语法
  - module 的复用 职责分离
   from modelscope.pipelines import pipeline
   modelscope 魔搭社区 功能很多 pipeline 管道 （nlp 派出管道 ）
-  damo/nlp_structbert_sentiment-classification_chinese-base
    模型很多 达摩院/情感分析/分类/支持中文

    pipeline(Tasks.text_classification, 'damo/nlp_structbert_sentiment-classification_chinese-base')
    打开管道 pipeline
    选择一项任务  Tasks.text_classification
    选择模型  damo/nlp_structbert_sentiment-classification_chinese-base

- 模型训练完以后就不会成长了， 不会学习新的知识 不准确
  微调大模型： 输入新数据 对数据进行标注

- 前后端为什么要学LLM？
  - 端模型时代来临
    小尺寸模型越来越强 AI手机 AI汽车

- LLM 需要算力， GPU