const fs = require('fs');

const readStream = fs.createReadStream('input.txt', 'utf8');

const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(writeStream);

readStream.on('error', (err) => {
  console.error('Error reading input file:', err);
});

writeStream.on('error', (err) => {
  console.error('Error writing to output file:', err);
});

writeStream.on('finish', () => {
  console.log('Content copied to output.txt');
});

const outputReadStream = fs.createReadStream('output.txt', 'utf8');
outputReadStream.on('data', (chunk) => {
  const lines = chunk.split('\n');
  lines.forEach(line => {
    console.log(line);
  });
});

outputReadStream.on('end', () => {
  console.log('Finished displaying content from output.txt');
});
