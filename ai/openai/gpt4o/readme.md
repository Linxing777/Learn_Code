# 面向openai 接口编程

- 多模型
  - 单模型
    chatgpt 文本
  - 图片 视频 音频 

- npm init -y 后端
  npm i openai     openai sdk 
  - 时间 空间

  - npm config set registry https://registry.npmmirror.com //设置镜像
    设置npm镜像 加快下载速度

    npm i -g openai //全局安装
    npm i -g pnpm 

    pnpm --version//查看版本 如果报错用下面代码
    -PowerShell 的执行策略是为了防止恶意脚本的执行，默认情况下，Windows 系统的执行策略可能是 Restricted，这意味着不允许运行任何脚本文件（包括 .ps1 文件）。
    powershell -ExecutionPolicy Bypass -Command ""

    - 即不会重复安装 也不会污染全局环境 符号链接去指向之前的安装
     快了 省空间 pnpm 

  - main.mjs 主入口  单点入口的职责：
    单点入口意味着所有模块和功能的调用都通过这个文件启动，负责初始化应用程序并协调各个模块。

    初始化应用：设置全局配置、初始化数据库连接等。

    加载模块：导入并组织其他模块，确保它们按正确顺序执行。

    启动应用：调用启动函数，如启动服务器或渲染UI。

    错误处理：捕获并处理未预见的错误，确保应用稳定。

    mjs： 支持es6 module import from
    js: 只支持es5

  - 调试能力
    console.log(result)   深 查看他的json 结构

  - 理解参数
    gpt4o 多模态读图能力 
      -文本指令
      -图片地址
  
  - try catch 捕获错误
    容错

  - key 不能提交到GitHub
    资产的安全风险
    