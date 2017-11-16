to deploy in github
./node_modules/.bin/http-server dist -p 8081

sudo rm -rf build && git checkout gh-pages && git merge dev && npm run build && git add dist/* -f && git commit -a -m "build files" && git push origin gh-pages && git checkout dev