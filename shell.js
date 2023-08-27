/**
 * this is just a basic file which which will work as low level terminal to run inside linux image, only for testing purpose and not in production
*/

const { exec } = require("child_process");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function executeCommand (cmd) {
    if (cmd === ('exit' || 'quit')) process.exit(0);

    exec(cmd, (err, stdout, stderr) => {
        if (stdout) {
            console.log(`> `, stdout);
            terminalOpen();
        };
        if(err) console.log({err});
        if(stderr) console.log({stderr})
    });
}


function terminalOpen () {
    return rl.question("$~ ", (cmd) => {
        executeCommand(cmd.toString());
    });
}

terminalOpen();
