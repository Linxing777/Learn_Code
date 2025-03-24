-git 命令
  版本控制软件  多人协作 几个亿项目
  保存代码的版本且安全 团队间代码的协作
  git 帮我们在本地 管理代码版本 远程仓库（分布式）
  - git init 初始化仓库
  - git add . 提交所有文件
  - git commit -m "" 提交到本地仓库
  - git push origin main 提交到远程仓库

  - git branch 查看分支
  - git checkout  切换分支
  - git merge 分支名 合并分支

## 大厂需要git技能？
  - git 是必备技能
  - 高级技巧 考点
  - git 文档内置
    
    git help 常用的git 命令
    git help -a 列出所有git 命令
    vi 编辑器 ：j ：k 上下翻页 ：q 退出
    git help add  深入了解某个命令 (一个文档)
    你是如何了解git命令的作用和参数？

## 代码仓库
  文件夹 -> 开发目录（网站）-> 代码仓库
  - 好处：
     项目代码版本（version） git关注的是代码的版本
     时光穿梭机  文件的任何版本 有时候我们要回退 
  - git 仓库存的是什么？
    文件？  文件的版本
    拿着相机一直拍
    .git 目录就是仓库
    git 相关内容放在.git 目录下
  - git config 配置 操作留下了责任人  多人下协作的思想
    git config --global user.name ""
    git config --global user.email ""  本地 远程 对比
    配置 --global 全局配置  只需要配置一次
  
  - git status
    当前仓库的状态
    on branch main  主分支上  默认分支

    untracked files  未跟踪的文件  没有纳入git 版本管理
    use commit 

  添加到仓库是比较严谨的做法
  - git add filename
    把文件添加到暂存区
    git add .  把所有文件添加到暂存区
    git add -A  把所有文件添加到暂存区
  
  - git status  
    让我们了解仓库的状态
    红色  未跟踪的文件  没有纳入git 版本管理
    绿色  已跟踪的文件  纳入了git 版本管理
    
  - 为什么要暂存区 仓库 两个概念
    - 可以多次修改
    - 分几次add 然后一次性commit
  
  - git log 查看提交历史
    commit f6868c5432b3514642325df547dbaef42cad149c (HEAD -> master)
Author: pys <1047759518@qq.com>
Date:   Thu Feb 27 00:57:36 2025 +0800

    添加了index.html

  - git log --oneline 提交历史的简化版

    f6868c5 (HEAD -> master) 添加了index.html
    文件版本号 分支 为什么提交的解释

  - 暂存区 仓库
    - 一次性可能多个文件多次加入暂存区  可以后悔  组成一个提交逻辑（任务）
    - 一次commit -m ""  一次提交  要规范 讲清楚任务
    - 不要随便提交commit  围绕开发需求
       一个商务 2-5次commit

