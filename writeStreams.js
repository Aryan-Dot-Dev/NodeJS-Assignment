const fs = require('fs');

const countries = [
  { name: 'USA', population: '331 million', GDP: '$21.43 trillion', independenceYear: 1776, growthRate: '2.3%' },
  { name: 'India', population: '1.38 billion', GDP: '$2.87 trillion', independenceYear: 1947, growthRate: '6.9%' },
  { name: 'China', population: '1.41 billion', GDP: '$14.34 trillion', independenceYear: 1949, growthRate: '6.1%' },
  { name: 'Brazil', population: '213 million', GDP: '$2.05 trillion', independenceYear: 1822, growthRate: '1.1%' },
  { name: 'Australia', population: '26 million', GDP: '$1.39 trillion', independenceYear: 1901, growthRate: '2.8%' },
];

const writeStream = fs.createWriteStream('Countries.txt');

countries.forEach(country => {
  writeStream.write(`${country.name}, ${country.population}, ${country.GDP}, ${country.independenceYear}, ${country.growthRate}\n`);
});

writeStream.end();

writeStream.on('error', (err) => {
  console.error('Error writing to file:', err);
});

writeStream.on('finish', () => {
  console.log('Data successfully written to Countries.txt');
});
