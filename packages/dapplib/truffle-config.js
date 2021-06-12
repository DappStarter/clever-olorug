require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet response random unusual install define army gift'; 
let testAccounts = [
"0xf06e904013f0613d5284cd22bb494f6dacf2a553a90b87b7cc00e0c39677e538",
"0x6414b8f4300d6977792c9a0cae8970ce7170e18405659304f275cc98d5d7bccb",
"0x84c024357650e7582d0e19f592bd4410bb4867c07be82a08b6ba5a12b9884803",
"0x2046cbf34873530b2becf1b10baaf5751635c59e0c8e1855927aeff8ea943cb9",
"0x1b1f4c9d3e4ddf7408e6e889380d7e5d3d81959a621528390e85a2908f415cc3",
"0x7493e4a715d24e5d31e8eca7591114150737cb03538c0f7ff38af212e1255ef7",
"0x00960d5e71ae5fc44a4d152e4d6c38d53cf3335bb54f2dfe4bfbdbf6d94d7598",
"0xc52ecd0f329f12d95da7215df369980b80448ee1225f78443760fbfbc83fadec",
"0xdbe07fb971fc0187f1fbe4b0fd98db76020d3f5f191fa4ddac5bcf87b096b69e",
"0xff1609a16fc04a8548bb725fd0f3a2270645aee2d26d583199ff9db3ac5e1f3b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

