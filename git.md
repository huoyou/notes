#### 配置Git
1. git config --global user.name "my name"
2. git config --global user.email myEmail@example.com

#### 创建一个新仓库 – git init
* git init (命令行会出现  ‘Initialized empty Git repository in /home/user/Desktop/git_exercise/.git/’,说明仓库建立好)

#### 检查状态 – git status

#### 暂存 – git add
* git add hello.txt
* git add .

#### 链接远程仓库 – git remote add
* git remote add origin https://github.com/igeekbar/awesome-project.git

#### 上传到服务器 – git push
* git push origin master 

#### 克隆仓库 – git clone
* git clone https://github.com/igeekbar/awesome-project.git

#### 从服务器上获得修改 – git pull
* git pull origin master 

#### git 本地仓库上传到远程仓库
1. git init
2. git add .  // .添加所有
3. git commit -m "first commit"
4. git pull --rebase origin master //进行代码合并
5. git push -u origin master