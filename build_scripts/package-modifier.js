const fs = require('fs');
const path = require('path');

let contents = fs.readFileSync(path.join(__dirname, '../package.json'));
contents = JSON.parse(contents.toString());

let dependenciesKeys = Object.keys(contents.dependencies);
let devDependenciesKeys = Object.keys(contents.devDependencies);

for (let i = 0; i < dependenciesKeys.length; i++) {
    if (dependenciesKeys[i].includes("@angular")) {
        delete contents.dependencies[dependenciesKeys[i]];
    }
}

for (let i = 0; i < devDependenciesKeys.length; i++) {
    if (devDependenciesKeys[i].includes("@angular")) {
        delete contents.devDependencies[devDependenciesKeys[i]];
    }
}
fs.writeFile(path.join(__dirname, '../package.json'), JSON.stringify(contents), (err) => {
    if(err) throw err;
    else console.log('package.json optimized');
});