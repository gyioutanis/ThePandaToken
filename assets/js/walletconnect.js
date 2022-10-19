/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */

// Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;

let erc20tokenAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "ChainlinkCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "ChainlinkFulfilled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "id",
                "type": "bytes32"
            }
        ],
        "name": "ChainlinkRequested",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "Deposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address payable",
                "name": "relayerAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "functionSignature",
                "type": "bytes"
            }
        ],
        "name": "MetaTransactionExecuted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "_fromAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_toAddress",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "_toMemo",
                "type": "string"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "DEPOSITOR_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ERC712_VERSION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_hasSupplyChanged",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "_lastRequestTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "canRunNextCheckRound",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "functionSignature",
                "type": "bytes"
            },
            {
                "internalType": "bytes32",
                "name": "sigR",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "sigS",
                "type": "bytes32"
            },
            {
                "internalType": "uint8",
                "name": "sigV",
                "type": "uint8"
            }
        ],
        "name": "executeMetaTransaction",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_requestId",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "_lockedToken",
                "type": "uint256"
            }
        ],
        "name": "fulfill",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getChainId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDomainSeperator",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLastBlockTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getNextRoundTimestamp",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getNonce",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastStellarBalanceSnapShot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastWrappedBalanceSnapShot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "requestLockedTokenData",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "link_",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "oracle_",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "jobId_",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "stellarUrl_",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "fee_",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "apiPath_",
                "type": "string"
            }
        ],
        "name": "setChainlinkParameters",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "withdrawEnabled",
                "type": "bool"
            }
        ],
        "name": "setIsWithdrawEnabled",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "hasSupplyChanged_",
                "type": "bool"
            }
        ],
        "name": "setSupplyChanged",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "toAddress",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "memo",
                "type": "string"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to_",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount_",
                "type": "uint256"
            }
        ],
        "name": "withdrawLinkTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawalsEnabled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


// Web3modal instance
let web3Modal

// Chosen wallet provider given by the dialog window
let provider;


// Address of the selected account
let selectedAccount;
let mmAccounts;
let isHttps = false;
let chainData;

/**
 * Setup the orchestra
 */
function init() {
    console.log("init...");
    console.log("Initializing example");
    console.log("WalletConnectProvider is", WalletConnectProvider);
    console.log("Fortmatic is", Fortmatic);
    console.log("window.web3 is", window.web3, "window.ethereum is", window.ethereum);

    console.log("Loading chains");


    // Check that the web page is run in a secure context,
    // as otherwise MetaMask won't be available
    // if (location.protocol !== 'https:') {
    //     // https://ethereum.stackexchange.com/a/62217/620
    //     // const alert = document.querySelector("#mmconnect");
    //     // alert.style.display = "block";
    //     document.querySelector("#mmconnect").style.display = "block";
    //
    //
    //     document.querySelector("#connect_wallet").style.display = "block";
    //     document.querySelector("#wallet_connected").style.display = "none";
    //     document.querySelector("#connect_wallet").setAttribute("disabled", "disabled")
    //     isHttps = false;
    //     return;
    // }
    document.querySelector("#mmconnect").style.display = "none";
    isHttps = true;

    $.getJSON('https://chainid.network/chains.json', function (data) {
        // JSON result in `data` variable
        chainData = data;
    });


    // Tell Web3modal what providers we have available.
    // Built-in web browser provider (only one can exist as a time)
    // like MetaMask, Brave or Opera is added automatically by Web3modal
    const providerOptions = {};

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    console.log("Web3Modal instance is", web3Modal);
}


function detectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        return true
    } else {
        document.querySelector("#connect_wallet").style.display = "block";
        document.querySelector("#wallet_connected").style.display = "none";

        document.querySelector("#connect_wallet").textContent = 'You need to install Metamask browser addon'
        document.querySelector("#connect_wallet").disable = true;

        const event = new Event('metamaskNotAvailable');
        document.dispatchEvent(event);

        return false
    }
}

/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

    // Get a Web3 instance for the wallet
    const web3 = new Web3(provider);

    console.log("provider ", provider);
    console.log("Web3 instance is", web3);

    // Get connected chain id from Ethereum node
    const chainId = await web3.eth.getChainId();

    let result;


    // Get list of accounts of the connected wallet
    const accounts = await web3.eth.getAccounts();

    // MetaMask does not give you all accounts, only the selected account
    console.log("Got accounts", accounts);
    selectedAccount = accounts[0];
    mmAccounts = accounts;


    await selectAccount(accounts);


}


/**
 * Fetch account data for UI when
 * - User switches accounts in wallet
 * - User switches networks in wallet
 * - User connects wallet initially
 */
async function refreshAccountData() {

    const event = new Event('refreshingAccountData');
    document.dispatchEvent(event);

    // If any current data is displayed when
    // the user is switching acounts in the wallet
    // immediate hide this data
    document.querySelector("#connect_wallet").style.display = "block";
    document.querySelector("#wallet_connected").style.display = "none";
    document.querySelector("#connect_wallet").setAttribute("disabled", "disabled")


    // Disable button while UI is loading.
    // fetchAccountData() will take a while as it communicates
    // with Ethereum node via JSON-RPC and loads chain data
    // over an API call.
    await fetchAccountData(provider);
    document.querySelector("#connect_wallet").removeAttribute("disabled")
}


/**
 * Disconnect wallet button pressed.
 */
async function onDisconnect() {

    console.log("Killing the wallet connection", provider);

    // TODO: Which providers have close method?
    if (provider.close) {
        await provider.close();

        // If the cached provider is not cleared,
        // WalletConnect will default to the existing session
        // and does not allow to re-scan the QR code with a new wallet.
        // Depending on your use case you may want or want not his behavir.
        await web3Modal.clearCachedProvider();
        provider = null;

    }

    selectedAccount = null;

    // Set the UI back to the initial state
    document.querySelector("#connect_wallet").addEventListener("click", onConnect);
    document.querySelector("#connect_wallet").style.display = "block";
    document.querySelector("#wallet_connected").style.display = "none";

}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    console.log("LOAD...");
    await init();
    m = await detectMetaMask()
    if (m) {

        try {
            provider = await window.ethereum;
            // provider = await web3Modal.connect();
        } catch (e) {
            console.log("Could not get a wallet connection", e);
            await selectAccount(null);
            return;
        }

        const web3 = new Web3(provider);

        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
            // alert('accountsChanged');
            selectedAccount = accounts[0];
            const event = new Event('accountChanged');
            document.dispatchEvent(event);
            fetchAccountData();
        });

        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
            // alert('chainChanged');
            const event = new Event('chainChanged');
            document.dispatchEvent(event);
            fetchAccountData();
        });

        // Subscribe to networkId change
        provider.on("networkChanged", (networkId) => {
            // alert('networkChanged');
            fetchAccountData();
        });


        const accounts = await web3.eth.getAccounts();

        // MetaMask does not give you all accounts, only the selected account
        console.log("Got accounts", accounts);
        selectedAccount = accounts[0];
        const event = new Event('accountChanged');
        document.dispatchEvent(event);
        await selectAccount(accounts);

    }
});

async function selectAccount(accounts) {
    console.log("**** @@ selectAccount");
    if (selectedAccount == null) {
        // alert('selectedAccount: NULL')
        document.querySelector("#connect_wallet").addEventListener("click", onConnect);
        document.querySelector("#connect_wallet").style.display = "block";
        document.querySelector("#wallet_connected").style.display = "none";


    } else {
        // alert('selectedAccount: '+selectedAccount)

        document.querySelector("#connect_wallet").style.display = "none";
        document.querySelector("#wallet_connected").style.display = "block";


        document.querySelector("#connect_wallet").style.display = "none";
        document.querySelector("#wallet_connected").style.display = "block";

    }

    const event = new Event('selectAccount');
    document.dispatchEvent(event);
}


/**
 * Connect wallet button pressed.
 */
async function onConnect() {
    if (!isHttps) {
        return;
    }

    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.log("Could not get a wallet connection", e);
        await selectAccount(null);
        return;
    }
    await refreshAccountData();
}

function isConnectedMetamask() {
    return selectedAccount != null;
}

async function isCorrectChain(nftChain) {
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();


    if (chainId === nftChain) {
        return true;
    } else {
        return false;
    }

}

async function correctChain(nftChain) {
    console.log('SWITCH NW ' + nftChain)
    const web3 = new Web3(provider);
    const chainId = await web3.eth.getChainId();

    let result;
    if (chainId != nftChain) {

        try {
            if (chainData) {
                $.each(chainData, async function (i, chain) {
                    if (chain.chainId === nftChain) {
                        const sendTransaction = await provider.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{chainId: "0x" + chain.chainId.toString(16)}]
                        });
                        return false;
                    }
                });
            }

        } catch (error) {
            try {
                await provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        getChainParams(nftChain),
                    ],
                });
            } catch (error) {
                alert(error.message);
            }
        }
    }

    const chainId_ = await web3.eth.getChainId();

    return chainId_ === nftChain;

}


var truncate = function (fullStr, strLen, separator) {
    if (fullStr.length <= strLen) return fullStr;

    separator = separator || '...';

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2);

    return fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars);
};

var subString = function (fullStr, strLen, separator) {
    separator = separator || '...';
    var length = 3;  // set to the number of characters you want to keep
    return fullStr.substring(0, Math.min(length, fullStr.length)) + separator;
};


function nFormatter(num, digits) {
    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
        {value: 1e9, symbol: "B"},
        {value: 1e12, symbol: "T"},
        {value: 1e15, symbol: "Q"},
        {value: 1e18, symbol: "E"}
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

function getChainSymbol(chainId) {
    var chainSymbol = '...';
    // chainData
    if (chainData && chainId) {
        $.each(chainData, function (i, chain) {
            if (chain.chainId === chainId) {
                chainSymbol = '' + chain.nativeCurrency.symbol;
                return false;
            }
        });
    }

    return chainSymbol;
}

function getChainDecimals(chainId) {
    var decimals = 18;
    // chainData
    if (chainData && chainId) {
        $.each(chainData, function (i, chain) {
            if (chain.chainId === chainId) {
                decimals = chain.nativeCurrency.decimals;
                return false;
            }
        });
    }

    return decimals;
}

function getChainParams(chainId) {
    var obj;
    if (chainData && chainId) {
        $.each(chainData, function (i, chain) {
            if (chain.chainId === chainId) {
                obj = JSON.parse("{}");
                obj.chainId = '0x' + chain.chainId.toString(16);
                obj.chainName = chain.name;
                obj.rpcUrls = chain.rpc;
                obj.nativeCurrency = chain.nativeCurrency;
                let blockExplorerUrls = [];
                blockExplorerUrls.push(chain.explorers[0].url);
                obj.blockExplorerUrls = blockExplorerUrls;

                return false;
            }
        });
    }
    return obj;
}

function getChainExplorerLink(chainId, address, addressFull) {

    var returnLink = address;
    // chainData
    if (chainData && chainId) {
        $.each(chainData, function (i, chain) {
            if (chain.chainId === chainId) {
                if (chain.explorers) {
                    returnLink = '<a href="' + chain.explorers[0].url + '/address/' + addressFull + '" target="_blank">' + address + '</a>';
                    return false;
                }
            }
        });
    }
    return returnLink;
}



