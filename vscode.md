#### vscode保存插件配置并使用gist管理代码片段
1. 安装插件Settings Sync;
2. 进入githup,Settings => Developer settings => Personal access tokens => Generate new token => 勾选gist,generate token;
3. 打开vscode，按shift+alt +u上传设置，在弹出窗里输入你的token，user setting里查看 sync.gist值，这个值用来你再另一台电脑上来下载你的设置；
4. 按alt+shift+d下载远程设置，在弹出窗里输入你的gist值。
5. 如果要重置同步设置：按ctrl+p  输入  '>sync'  
6. sync.gist: 90d3c8169781bc878155091bdb7be3f6；

#### 使用gist管理代码片段
1. 安装Share Code；
2. 进入vscode,Ctrl+Shift+P,输入Share Code,选择GitHub Gist，
3. shareCode.github.username：245542302@qq.com；
4. shareCode.github.authtoken： 3efe21595ff3ef205ec82b98278848c678d69429；

#### 本机配置
        {
            "git.path": "/usr/local/bin/git.exe",
            "javascript.implicitProjectConfig.experimentalDecorators": true,
            "git.ignoreMissingGitWarning": true,
            "cssrem.rootFontSize": 75,
            "emmet.triggerExpansionOnTab": true,
            "emmet.includeLanguages": {
                "javascript": "javascriptreact"
            },
            "git.autofetch": true,
            "git.enableSmartCommit": true,
            "window.zoomLevel": 0,
            "files.associations": {
                "*.js": "javascriptreact",
                "*.wpy": "vue"
            },
            "vsicons.dontShowNewVersionMessage": true,
            "java.errors.incompleteClasspath.severity": "ignore",
            "javascript.updateImportsOnFileMove.enabled": "never",
            "liveServer.settings.host": "127.0.0.1",
            "liveServer.settings.port": 8086,
            "liveServer.settings.donotShowInfoMsg": true,
            "liveServer.settings.donotVerifyTags": true,
            "liveServer.settings.CustomBrowser": "chrome",
            "explorer.confirmDelete": false,
            // "liveServer.settings.proxy": {
            //     "enable": false,
            //     "baseUri": "/",
            //     "proxyUri": "http://172.19.10.48:80"
            //   },
                "eslint.validate": [
                    "javascript",
                    "javascriptreact",
                    "typescript",
                    "html",
                    "vue"
                ],
                "eslint.trace.server": "messages" ,
                "eslint.enable": true,
                "eslint.autoFixOnSave": true,
                "eslint.run": "onType",
                "explorer.confirmDragAndDrop": false,
                "sync.gist": "90d3c8169781bc878155091bdb7be3f6",
                "sync.quietSync": false,
                "sync.removeExtensions": true,
                "sync.syncExtensions": true,
                "sync.autoDownload": false,
                "sync.autoUpload": false,
                "sync.forceDownload": false,
                "sync.askGistName": true,
                "shareCode.github.username": "245542302@qq.com",
                "shareCode.github.authtoken": "3efe21595ff3ef205ec82b98278848c678d69429",
        }
