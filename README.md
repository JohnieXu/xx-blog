# xx-blog

## install

```bash
npm i || yarn
```

## publish

### publish to github

```bash
npm run deploy:build || yarn deploy:build
```

### publish to coding

1. step 1

    ```bash
    git remote add coding git@git.coding.net:JohnieXu/xx-blog.git
    git add .
    git commit -m update
    git push coding master
    npm run docs:build
    ```

2. step 2

    ```bash
    git checkout coding-pages || git checkout -b coding-pages coding/coding-pages
    ```

3. step 3

    用step1中build产生dist目录下的所有文件覆盖coding-pages分支下项目根目录下的文件

    然后push更新

    ```bash
    git add .
    git commit -m udpate
    git push coding coding-pages
    ```
