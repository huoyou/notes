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

#### 比对两个不同提交之间的差别，每次提交都有一个标识id，查看所有历史提交和他们的id，可以使用 git log:
        $ git log 
        commit ba25c0ff30e1b2f0259157b42b9f8f5d174d80d7 
        Author: igeekbar 
        Date:   Fri July 29 17:15:28 2016 +0300 
            New feature complete 
        commit b10cc1238e355c02a044ef9f9860811ff605c9b4 
        Author: igeekbar 
        Date:    Fri July 29 16:30:04 2016 +0300 
            Added content to hello.txt 
        commit 09bd8cc171d7084e78e4d118a2346b7487dca059 
        Author: igeekbar 
        Date:   Thu July 28 17:52:14 2016 +0300 
            Initial commit
#### id很长，但是当使用它的时候你并不需要复制整个字符串，前几个字符就够了。查看某一次提交更新了什么，使用 git show [commit]:
        $ git show b10cc123 
        commit b10cc1238e355c02a044ef9f9860811ff605c9b4 
        Author: igeekbar 
        Date:    Fri July 29 16:30:04 2016 +0300 
            Added content to hello.txt 
        diff --git a/hello.txt b/hello.txt 
        index e69de29..b546a21 100644 
        --- a/hello.txt 
        +++ b/hello.txt 
        @@ -0,0 +1 @@ 
        +Nice weather today, isn't it?


#### 查看两次提交的不同，可以使用git diff [commit-from]..[commit-to]：
        $ git diff 09bd8cc..ba25c0ff 
        diff --git a/feature.txt b/feature.txt 
        new file mode 100644 
        index 0000000..e69de29 
        diff --git a/hello.txt b/hello.txt 
        index e69de29..b546a21 100644 
        --- a/hello.txt 
        +++ b/hello.txt 
        @@ -0,0 +1 @@ 
        +Nice weather today, isn't it?

比较首次提交和最后一次提交，我们可以看到中间所有的更改。使用git difftool命令可以用图形化界面查看所有更改。

#### 回滚某个文件到之前的版本
* Git允许我们将某个特定的文件回滚到特定的提交，使用的也是 git checkout命令。

下面我们将hello.txt回滚到最初的状态，需要指定回滚到哪个提交（以id作为参数），以及文件的全路径。

        git checkout 09bd8cc1 hello.txt