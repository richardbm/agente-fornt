to deploy in github

sudo rm -rf build && git checkout gh-pages && git merge dev && npm run build && git add build/* -f && git commit -a -m "build files" && git push origin gh-pages && git checkout dev