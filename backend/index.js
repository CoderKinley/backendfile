const os = require("os");
const path = require("path");
// info about the current user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log("the system up time is ",os.uptime(),'seconds');

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}

console.log(currentOS);
console.log(path.sep);

const absolute = path.resolve(__dirname, "content","subfolder","text.txt");
console.log(absolute);