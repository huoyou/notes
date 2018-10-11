#### 配置Git
1. git config --global user.name "my name"
2. git config --global user.email myEmail@example.com

#### 创建一个新仓库 – git init
* git init (命令行会出现  ‘Initialized empty Git repository in /home/user/Desktop/git_exercise/.git/’,说明仓库建立好)

#### 检查状态 
* git status

#### 暂存 
* git add hello.txt
* git add .

#### 链接远程仓库 
* git remote add origin https://github.com/igeekbar/awesome-project.git

#### 上传到服务器 
* git push origin master 

#### 克隆仓库 
* git clone https://github.com/igeekbar/awesome-project.git

#### 从服务器上获得修改 
* git pull origin master 

#### git 本地仓库上传到远程仓库
1. git init
2. git add .  // .添加所有
3. git commit -m "first commit"
4. git pull --rebase origin master //进行代码合并
5. git push -u origin master

#### 创建新分支
* git branch xinfenzhi

#### 切换分支
* git branch  查看所有分支
* git checkout master 切换到master分支

#### 合并分支
* git checkout master (新分支任务完成了，回到master分支)
* git merge xinfenzhi (使用git merge把xinfenzhi分支合并到master上)
* git branch -d xinfenzhi (现在master分支是最新的了，xinfenzhi分支可以删掉了。)