const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const STATUS_CODES = [200, 201, 400, 500];

const URL = 'https://httpstatuses.com';

async function getDetails(data) {
  const $ = cheerio.load(data);
  const regex = /i*×/gm;
  const headline = await $('.code')
    .find('h2')
    .first()
    .text()
    .replace(regex, '0');
  const summary = await $('.code')
    .find('p')
    .first()
    .text();
  return { headline, summary };
}

async function fetchData(statusCode) {
  try {
    const rawData = await fetch(`${URL}/${statusCode}`);
    return await rawData.text();
  } catch (err) {
    throw new Error(err);
  }
}

async function orchestrator() {
  const result = {};
  const promises = await STATUS_CODES.map(async statusCode => {
    const data = await fetchData(statusCode);
    const details = await getDetails(data);
    result[statusCode] = details;
  });
  await Promise.all(promises);
  fs.writeFileSync('data.json', JSON.stringify(result), 'utf-8', function(err) {
    if (err) {
      throw new Error(err);
    }
  });
}

module.exports = {
  orchestrator,
};
