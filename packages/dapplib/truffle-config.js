require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift riot saddle concert hunt neck fresh gas'; 
let testAccounts = [
"0xe7039e813227fa4b0d0997f93430bd2f3c635055d67a0d8562bb67b684627153",
"0x8b56bc2ffe42af65d0e75b977982678ae05be72a52c4f6cbae67b4debc508e68",
"0xc89ab8ef7500af2ec1821e8637a80ddb56db262705a3145b83b70b423e7a1e50",
"0x2aee6d2a15d308f1f7fdd1a86715f233ad40c9d18ccd65195b7845512293b27f",
"0x9a7f269098628b35d2e7b7377b725b20e83e1b9547b4b8e2c92e9c85691a2279",
"0xab03506bd3c0a292b5122ea1746de06ecdfd178f0788a25307d6af3a901757a0",
"0xcb8847962fc694f9a71ac08676578ea62e8946787bf7ec8a7c9f489262a023d1",
"0xa29e6fecd7cb1eb3a6c12ca5a0aacbccaf37d0f91f307f43b92b099d25626094",
"0x57acad4dac97cbb9f7e62c807ba90304840b9b33787b94f51f3e9c64781ca75a",
"0xd0639f15a7b855b88de26b2a576965f772d79fcae5eb5c214be5d0b47ccf77c7"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

