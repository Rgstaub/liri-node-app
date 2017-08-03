let fs = require('fs');
let cmd = require('node-cmd');
let content = [];
let command = "";


content = (fs.readFileSync('./random.txt', 'utf8')).replace(/"/g,'').split(",");
console.log(content);
let args = "";
for (let i = 1; i < content.length; i++) {
  args += content[i];
}

cmd.get(`node liri.js ${content[0]} ${args}`, function(err, data, stderr) {
  console.log(data);
})