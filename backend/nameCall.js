// const {name1,name2,name3} = require("./name");
const name = require("./name");
const namePrin = require("./namePrint");
const data = require("./wall");

console.log(name);
console.log(data);
namePrin(name.name1);
namePrin(name.name2);
namePrin(name.name3);
namePrin("Kuenley");