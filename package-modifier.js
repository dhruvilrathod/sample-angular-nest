const fs = require('fs');
const path = require('path');

let contents = fs.readFileSync(path.join(__dirname, 'package.json'));
contents = JSON.parse(contents.toString());

let dependenciesKeys = Object.keys(contents.dependencies);
console.log(dependenciesKeys);

for (var i = 0; i < dependenciesKeys.length; i++) {
    if (dependenciesKeys[i].includes("@angular/")) {
        contents.devDependencies[dependenciesKeys[i]] = contents.dependencies[dependenciesKeys[i]];
        delete contents.dependencies[dependenciesKeys[i]];
    }
}

fs.writeFile(path.join(__dirname, 'package.json'), JSON.stringify(contents), (err) => {
    if(err) throw err;
    else console.log('package.json optimized');
});