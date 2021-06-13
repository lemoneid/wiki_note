> Git屡学屡忘，每次想push到github的时候都想不起来命令咋敲……
> 于是决定写个笔记记一下！


```c++
常量：全部⼤写
类名：⼤驼峰⸺⾸字⺟⼤写，其后单词⾸字⺟⼤写
⽅法函数名：⼩驼峰⸺⾸字⺟⼩写，其后单词⾸字⺟⼤写
变量名：⼩驼峰或下划线⸺全部⼩写，单词之间⽤下划线连接
系统保留：前置下划线（ __ ），在命名中不要使⽤前置下划线
```





## 工作区和版本库

初始化工作目录：`git init`
**把文件添加到暂存区（stage）**：`git add file.txt`
查看当前暂存区状态：`git status`
取消暂存（即撤销add）：`git reset HEAD`
取消暂存某个文件：`git reset HEAD file.txt`
**提交当前暂存区中的所有修改**：`git commit -m "备注信息"`
查看修改内容：`git diff file.txt`

## 版本回退

查看提交历史：`git log`
查看所有命令历史：`git reflog`
回退到某个版本：`git reset --hard ae77e84（版本号）`，`git reset --hard HEAD^（有几个^就是往回退几个版本）`
放弃当前修改，恢复到版本库中最新版本（最近一次commit或add的状态）：`git checkout -- file.txt`

