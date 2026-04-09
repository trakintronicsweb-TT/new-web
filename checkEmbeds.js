const https = require('https');

const ids = [
  'EhFED7vayxc', '7QFnu18dFhE', 'rEVFEuBeK9o',
  'th4Dqtdsqho', '6XVvTjBEbwk', 'rMKm9IPOQN4',
  '97W8yal05nQ', 'sSUdFb0BVEg', 'mxQTtfjyjyU',
  'cgcKd876zyk'
];

async function checkEmbedStatus() {
  for (const id of ids) {
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`;
    await new Promise(resolve => {
      https.get(url, (res) => {
        console.log(`${id}: HTTP ${res.statusCode} - ${res.statusCode === 200 ? 'Embed ALLOWED' : 'Embed DISABLED'}`);
        resolve();
      });
    });
  }
}

checkEmbedStatus();
