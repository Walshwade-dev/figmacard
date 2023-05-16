#!/usr/bin/env sh
set -e
npm run build
cd dist

git init
git checkout -B master
git add -A
git commit -m 'deploy'

git push -f https://github.com/Walshwade-dev/figmaCard.git master:gh-pages

cd -