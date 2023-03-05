const {readFile, writeFile} = require('fs');
const util = require('util');
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

let start = async () =>{
    try{
        const first = await readFilePromise("./content/first.txt", "utf8");
        console.log(first);
        const edited = await writeFilePromise("./content/dangerous.txt","This is awsome!!!");
        console.log(edited);
    }
    catch(error){
        console.log(error);
    }
}

start();
// getFile("./content/first.txt").then(result => console.log(result)).catch(err => console.log(err));


// let getFile = (path) =>{
//     return new Promise((resolve, reject) =>{
//         readFile(path,"utf8", (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     });
// }