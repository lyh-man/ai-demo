# windows 安装 nodejs (chocolatey)
+ 管理员执行 powershell，安装 chocolatey
```text
# 更改执行策略，仅当前进程有效
Set-ExecutionPolicy Bypass -Scope Process -Force

# 下载并安装 chocolatey
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072  
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# 查看版本
choco -v

# 查看安装软件
choco list
```

+ chocolatey 安装 nodejs
```text
# 安装 20.15.0 版本
choco install nodejs-lts --version="20.15.0"

# 查看版本
npm -v
node -v
```

+ 更换 npm 源
````text
npm config get registry
npm config set registry=http://registry.npm.taobao.org/
````

# 使用 npm 创建 vue 项目 (vite 构建) 
```text
npm create vue@latest
```

# vue
+ [vue3 官方文档](https://cn.vuejs.org/guide/introduction.html)
+ [vite 配置 server](https://vitejs.cn/vite3-cn/config/server-options.html)