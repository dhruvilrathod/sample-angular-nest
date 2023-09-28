npm install && 
npm run fullstack-build-prod --cache ./npm_cache && 
node ./build_scripts/package-modifier.js && 
npm ci --omit=dev && 
npm cache clean --force && 
npm prune --production && 
rm -r ./npm_cache/
rm -r ./.angular/