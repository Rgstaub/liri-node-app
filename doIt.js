let fs = require('fs');
let content = [];

fs.readFile('./random.txt', 'utf8', (err, data) => {
  console.log(data);
  content = data.split(",");
  console.log(content);
})