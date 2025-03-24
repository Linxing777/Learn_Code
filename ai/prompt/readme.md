

- dotenv  的理解
  - process.env 是一个对象，里面存储着环境变量
  - key 不能提交明文
  - 根目录下添加.env 包含key信息
  - 不能提交github .gitignore 添加.env
  - dotenv.config() 读取.env文件