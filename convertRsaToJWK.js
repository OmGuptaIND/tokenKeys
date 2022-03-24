// const fs = require('fs');
// const rsaPemToJwk = require('rsa-pem-to-jwk');
const jwktopem = require('jwk-to-pem');
const axios = require('axios');
// const privateKey = fs.readFileSync('./certs/private.pem');

// const jwk = rsaPemToJwk(privateKey, { use: 'sig', alg: 'RS256', kid: 'u8vvNWZ4341xtd00-RHQI93qXGybMFEDGhteZhcAoVE' }, 'public');
// console.log(jwk);

const fs = require('fs');
// const jose = require('node-jose');
// const keyStore = jose.JWK.createKeyStore();
// keyStore.generate('RSA', 4096, { alg: 'RS256', use: 'sig' }).then((result) => {
//   fs.writeFileSync('keys.json', JSON.stringify(keyStore.toJSON(true), null, '  '));
// });

// const getPublicKey = async () => {
//   const ks = fs.readFileSync('./keys.json');
//   const key = JSON.parse(ks);
//   const bothKey = key.keys[0];
//   //   console.log(key);
//   //   const { data } = await axios.get('http://localhost:4500/.well-known/jwks.json');
//   //   const [firstKey] = data.keys;
//   const keys = jwktopem(bothKey, { format: 'pem', private: true });
//   console.log(keys);
//   //   const keys = jwktopem();
//   //   console.log(keys);
//   //   const keyStore = await jose.JWK.asKeyStore(ks.toString());
//   //   console.log(keyStore.toJSON());
// };
// getPublicKey();
