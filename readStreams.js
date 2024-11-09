const fs = require('fs');

const readStream = fs.createReadStream('Countries.txt', 'utf8');

readStream.on('data', (chunk) => {
  const lines = chunk.split('\n');
  lines.forEach(line => {
    console.log(line);
  });
});

readStream.on('error', (err) => {
  console.error('Error reading from file:', err);
});

readStream.on('end', () => {
  console.log('Finished reading from Countries.txt');
});
