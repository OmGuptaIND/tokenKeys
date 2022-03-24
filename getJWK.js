const fs = require('fs');
const jwktopem = require('jwk-to-pem');
const jose = require('node-jose');
const keyStore = jose.JWK.createKeyStore();

const getBothKeys = () => {
  keyStore.generate('RSA', 4096, { alg: 'RS256', use: 'sig' }).then((result) => {
    fs.writeFileSync('keys.json', JSON.stringify(keyStore.toJSON(true), null, '  '));
  });
};

const getPublicKey = async () => {
  const ks = fs.readFileSync('./keys.json');
  const keyStore = await jose.JWK.asKeyStore(ks.toString());
  fs.writeFileSync('jwks.json', JSON.stringify(keyStore.toJSON(), null, '  '));
};

const getPrivateKey = async () => {
  const ks = fs.readFileSync('./keys.json');
  const key = JSON.parse(ks);
  const bothKey = key.keys[0];
  const privateKey = jwktopem(bothKey, { private: true });
  const publicKey = jwktopem(bothKey, { private: false });
  console.log(publicKey);
  console.log(privateKey);
};

const key = fs.readFileSync('./certs/private.pem', 'ascii');
console.log(key);

// getBothKeys();
// getPublicKey();
// getPrivateKey();
