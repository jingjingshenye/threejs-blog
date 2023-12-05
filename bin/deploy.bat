call yarn build

@REM call cp -r ./dist ./doc

cd doc

git init
git add -A
git commit -m "auto construct blog"

@REM  git push [远程库名] [本地分支名]:[远程分支名]
@REM git push -f https://github.com/jingjingshenye/vitepress-blog.git master:gh-pages
git push -f https://github.com/jingjingshenye/threejs-blog.git master:gh-pages