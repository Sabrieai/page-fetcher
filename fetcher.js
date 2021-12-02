const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

//http request
request(args[0], (error, response, body) => {
  
  // Write to file
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.error(err);
      return;
    }
    //if file written succesfully
    // needs to wait for results so inside the function as a callback
    const stats = fs.statSync(`${args[1]}`);
    const fileSizeInBytes = stats.size;
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${args[1]}`);
  });
});
