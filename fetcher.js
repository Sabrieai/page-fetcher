const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => {

  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    const stats = fs.statSync(`${args[1]}`);
    const fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);
  });
});
