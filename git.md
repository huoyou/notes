#### 配置Git
1. git config --global user.name "my name"
2. git config --global user.email myEmail@example.com






#### git 本地仓库上传到远程仓库

1. git init
2. git add .  // .添加所有
3. git commit -m "first commit"
4. git pull --rebase origin master //进行代码合并
5. git push -u origin master