let fs = require('fs');
const os = require('os');
const path = require('path');

let dir = './test_folder';

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
}

fs.writeFile("./test_folder/test.txt",
 `Information about the computer:
  Name: ${os.hostname()};
  OS version: ${os.version()};
  OS architecture: ${os.arch()};
  OS platform: ${os.platform()};
  OS type: ${os.type()};
  Release: ${os.release()};
  CPU  endianness: ${os.endianness()};
  Total memory: ${os.totalmem()};
  Free memory: ${os.freemem()};
  Load averages: ${os.loadavg()}.`
, (err) => {
  if (err) throw new Error(err);
  console.log("The file is saved!");
  console.log("******************");
  const info = fs.readFileSync(path.join(__dirname, 'test_folder', 'test.txt'), 'utf8');
  console.log(info);
});



