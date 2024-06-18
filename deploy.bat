set -e

npm run build

cd docs/.vuepress/dist

git init
git remote add origin https://gitee.com/JMGuodegit/gjmknowledge.git
git fetch origin

git push -f https://gitee.com/JMGuodegit/gjmknowledge.git
