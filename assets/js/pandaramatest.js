/**
 * Example JavaScript code that interacts with the page and Web3 wallets
 */
let abiStake = [
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
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_interestPercentStr",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_interestPercent",
                "type": "uint256"
            }
        ],
        "name": "addMonthlyStake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "borrowAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "borrowIntervalInSeconds",
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
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "calcBorrowAmountPerInterval",
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
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "calcStakeHolderStakeRewardForIntervalUnit",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "stakeHolderAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "since",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "interestPercentStr",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalClaimableAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowIntervalInSeconds",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowPercentage",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowAmountPerInterval",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowedAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBorrowedTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "releaseTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BetStakingContract.StakeHolder",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "calcStakeRewardForIntervalUnit",
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
                "name": "_stakeAddress",
                "type": "address"
            }
        ],
        "name": "checkPayment",
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
        "name": "claimsPaused",
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
        "name": "controlAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "currentLendings",
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
        "name": "currentStakes",
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
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "deleteMonthlyStake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_paused",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_claimsPaused",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_lendingPaused",
                "type": "bool"
            }
        ],
        "name": "doPause",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_interestPercentStr",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_interestPercent",
                "type": "uint256"
            }
        ],
        "name": "editMonthlyStake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "erc20ContractAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_stakeAddress",
                "type": "address"
            }
        ],
        "name": "getBorrowAmount",
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
                "name": "_stakeAddress",
                "type": "address"
            }
        ],
        "name": "getBorrowedAmount",
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
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "getMonthlyStake",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "intervalUnit",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "interestPercentStr",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "interestPercent",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BetStakingContract.MonthlyStake",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_stakeAddress",
                "type": "address"
            }
        ],
        "name": "getNextBorrowTime",
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
                "name": "_stakeHolder",
                "type": "address"
            }
        ],
        "name": "getStake",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "stakeHolderAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "since",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "interestPercentStr",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalClaimableAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowIntervalInSeconds",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowPercentage",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowAmountPerInterval",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowedAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBorrowedTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "releaseTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BetStakingContract.StakeHolder",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_page",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_resultsPerPage",
                "type": "uint256"
            }
        ],
        "name": "getStakerAddresses",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_page",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_resultsPerPage",
                "type": "uint256"
            }
        ],
        "name": "getStakerAddressesTuple",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "stakeHolderAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "since",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "interestPercentStr",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalClaimableAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowIntervalInSeconds",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowPercentage",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowAmountPerInterval",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "borrowedAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "lastBorrowedTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "releaseTime",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct BetStakingContract.StakeHolder[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "hasMonthlyStake",
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
                "name": "_stakeHolder",
                "type": "address"
            }
        ],
        "name": "hasStake",
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
        "name": "lendingPaused",
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
        "name": "lendingPercentage",
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
        "name": "minStakeAmount",
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
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "monthlyStakes",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "intervalUnit",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "interestPercentStr",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "interestPercent",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "paused",
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
                "name": "_stakeAddress",
                "type": "address"
            }
        ],
        "name": "releaseStake",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_controlAddress",
                "type": "address"
            }
        ],
        "name": "setControlAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_stakingIntervalInSeconds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_borrowIntervalInSeconds",
                "type": "uint256"
            }
        ],
        "name": "setIntervalSeconds",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_lendingPercentage",
                "type": "uint256"
            }
        ],
        "name": "setLendingPercentage",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_minStakeAmount",
                "type": "uint256"
            }
        ],
        "name": "setMinStakeAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_erc20ContractAddress",
                "type": "address"
            }
        ],
        "name": "setStakeToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "stakeHolders",
        "outputs": [
            {
                "internalType": "address",
                "name": "stakeHolderAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "since",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "interestPercentStr",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "totalClaimableAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowIntervalInSeconds",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowPercentage",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowAmountPerInterval",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "borrowedAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastBorrowedTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "releaseTime",
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
                "name": "stakeAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_intervalUnit",
                "type": "uint256"
            }
        ],
        "name": "stakeTokens",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "stakersCount",
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
        "name": "stakingIntervalInSeconds",
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
        "name": "totalLendings",
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
        "name": "totalRewards",
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
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdrawNative",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "erc20Address",
                "type": "address"
            },
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
        "name": "withdrawToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


//PROD
// let assetAddress = '0xC5BcFABBD614F3b8801150ce98137Ecdf1b8a6B5'
// let assetSymbol = 'wTFC';
// let minAmount = 10000000000000000000;
// let assetDecimals = 18;
// let stakeAddress = '0x1C036DD9098A18c46224654F3C843220B7419ac3'
// let assetChain = 137;

// TEST
let stakeAddress = '0x67E2a45e71AA1630e1c5c9b7B7Fa17458354D445'
let minAmount = 10000000000000000000;
let assetDecimals = 18;
let assetAddress = '0xEA83267040e61e739791dF4CA8B482246ACadb8A'
let assetSymbol = 'wZEE';
let assetChain = 80001;

var ethBalance = 0;


/**
 * Setup the orchestra
 */
function init() {
}

async function performStake() {
    var stakeAmount = document.querySelector('#amount').value;
    console.log('stake: ' + stakeAmount);

    var realMinAmount = minAmount / (10 ** assetDecimals);

    if (stakeAmount > ethBalance) {
        showInfoModal('Stake', 'Insufficient balance');
        $('#stake').attr('disabled', false);
        return;
    }

    if (stakeAmount < realMinAmount) {
        showInfoModal('Stake', 'Please enter amount greater than ' + realMinAmount + ' '+assetSymbol );
        $('#stake').attr('disabled', false);
        return;
    }
    var stakeAmountWei = BigInt(stakeAmount * (10 ** assetDecimals));
    console.log('stake WEI: ' + stakeAmountWei + ' selectedAccount: ' + selectedAccount);
    Loader.open();
    document.querySelector("#loader_text").textContent = 'Stake tokens...';
    const web3 = new Web3(provider);
    const stakeFirst = new web3.eth.Contract(
        abiStake,
        stakeAddress
    );
    stakeFirst.methods.stakeTokens(selectedAccount, stakeAmountWei.toString(), 12).send({from: selectedAccount, gasPrice: '60000000000', gasLimit: 400000})
        .then(function (receipt) {
            Loader.close()
            onConnected();
        }).catch((err) => {
        Loader.close()
        //     if (err == ''){
        //         err = 'Operation not successfull';
        //     }
        // showInfoModal('Stake',err);
        $('#stake').attr('disabled', false);
    });


    // $('#stake').attr('disabled', true);

}

async function releaseStake() {
    $('#relase_stake').attr('disabled', true);
    Loader.open();
    document.querySelector("#loader_text").textContent = 'Release stake...';
    const web3 = new Web3(provider);
    const stakeFirst = new web3.eth.Contract(
        abiStake,
        stakeAddress
    );
    stakeFirst.methods.releaseStake(selectedAccount,).send({from: selectedAccount})
        .then(function (receipt) {
            Loader.close()
            onConnected();
            $('#relase_stake').attr('disabled', false);
        }).catch((err) => {
        Loader.close()
        //     if (err == ''){
        //         err = 'Operation not successfull';
        //     }
        // showInfoModal('Stake',err);
        $('#relase_stake').attr('disabled', false);
    });
}

async function borrowAmount() {
    $('#borrow_from_stake').attr('disabled', true);
    Loader.open();
    document.querySelector("#loader_text").textContent = 'Borrow...';
    const web3 = new Web3(provider);
    const stakeFirst = new web3.eth.Contract(
        abiStake,
        stakeAddress
    );
    stakeFirst.methods.borrowAmount().send({from: selectedAccount})
        .then(function (receipt) {
            Loader.close()
            onConnected();
            $('#borrow_from_stake').attr('disabled', false);
        }).catch((err) => {
        Loader.close()
        $('#borrow_from_stake').attr('disabled', false);
    });
}


async function mint(mintAmount) {
    console.log('do mint!!')
    const web3 = new Web3(provider);

    $('#txid').html('')
    Loader.open();
    document.querySelector("#loader_text").textContent = 'Mint Silly Pandas...';
    if (selectedAccount == null) {
        Loader.close()
        return 0;
    }

    console.log('mint ' + mintAmount)
    // const web3 = new Web3(provider);
    const contractFirst = new web3.eth.Contract(
        abiMint,
        stakeAddress
    );
    console.log('mint')
    $('#stake').attr('disabled', true);
    contractFirst.methods.mint(selectedAccount, mintAmount).send({from: selectedAccount})
        .then(function (receipt) {
            a = receipt['transactionHash'];
            $('#txid').html('Your silly panda(s) have been successfully minted and will appear in your wallet momentarily.')
            Loader.close();
            // alert('Transaction Completed');
            onConnected();
        }).catch((err) => {
        Loader.close();
        onConnected();
    });


}


async function onConnected() {
    const web3 = new Web3(provider);


    const accountContainer = document.getElementById("connectedTo");
    accountContainer.innerHTML = '';


    document.querySelector("#switch").style.display = "none";
    document.querySelector("#has_no_stake").style.display = "none";
    document.querySelector("#has_stake").style.display = "none";
    if (!await isCorrectChain(assetChain)) {
        console.log("NOT isCorrectChain");
        accountContainer.innerHTML = 'Please switch to the correct network';
        document.querySelector("#switch").style.display = "block";
        //hide amount text view
        // correctChain(assetChain);
    } else {
        //check if has stake
        var hasStake = false;
        const stakeFirst = new web3.eth.Contract(
            abiStake,
            stakeAddress
        );
        document.querySelector("#has_no_stake").style.display = "none";
        document.querySelector("#has_stake").style.display = "none";
        stakeFirst.methods.hasStake(selectedAccount).call({from: selectedAccount})
            .then(function (has) {
                hasStake = has;
                console.log('hasStake = ' + has);
                if (hasStake) {
                    document.querySelector("#has_stake").style.display = "block";
                    document.querySelector("#relase_stake").style.display = "none";
                    document.querySelector("#borrow_from_stake").style.display = "none";


                    stakeFirst.methods.getStake(selectedAccount).call({from: selectedAccount})
                        .then(function (tuple) {
                            console.log('tuple = ' + tuple);
                            var stakedAmount = tuple[1] / (10 ** assetDecimals)
                            const your_stake = document.getElementById("your_stake");
                            your_stake.innerHTML = 'Your stake on ' + $.format.date(new Date(tuple[2] * 1000), 'dd MMM yyyy') + ': <b>' + nFormatter(stakedAmount, 4) + ' ' + assetSymbol + '</b>';

                            var borrowedAmount = tuple[8] / (10 ** assetDecimals);
                            const borrowed_amount = document.getElementById("borrowed_amount");
                            borrowed_amount.innerHTML = 'Borrowed amount: <b>' + nFormatter(borrowedAmount, 4) + ' ' + assetSymbol + '</b>';

                            var rewardAmount = tuple[4] / (10 ** assetDecimals);

                            rewardAmount = rewardAmount + stakedAmount - borrowedAmount;
                            const reward_amount = document.getElementById("reward_amount");
                            reward_amount.innerHTML = 'Your reward on ' + $.format.date(new Date(tuple[10] * 1000), 'dd MMM yyyy HH:mm') + ': <b>' + nFormatter(rewardAmount, 4) + ' ' + assetSymbol + '</b>';

                            var dNow = new Date();
                            var isRelased = tuple[10] * 1000 <= dNow.getTime();
                            console.log('isRelased = ' + isRelased)


                            if (isRelased) {
                                //show release button
                                document.querySelector("#relase_stake").style.display = "block";
                                document.querySelector("#relase_stake").innerHTML = 'Release Stake';

                            } else {
                                //show borrow button if available
                                // document.querySelector("#borrow_from_stake").style.display = "none";

                                stakeFirst.methods.getBorrowAmount(selectedAccount).call({from: selectedAccount})
                                    .then(function (bAmount) {
                                        if (bAmount > 0) {
                                            $('#borrow_from_stake').attr('disabled', false);

                                            document.querySelector("#borrow_from_stake").style.display = "block";
                                            document.querySelector("#borrow_from_stake").innerHTML = 'Borrow ' + nFormatter(bAmount / (10 ** assetDecimals), 4) + ' ' + assetSymbol;

                                        } else {
                                            stakeFirst.methods.getNextBorrowTime(selectedAccount).call({from: selectedAccount})
                                                .then(function (nextBorrowTime) {
                                                    if (nextBorrowTime > 0 && nextBorrowTime < tuple[10]) {
                                                        $('#borrow_from_stake').attr('disabled', true);
                                                        document.querySelector("#borrow_from_stake").style.display = "block";
                                                        document.querySelector("#borrow_from_stake").innerHTML = 'Next Borrow on ' + $.format.date(new Date(nextBorrowTime * 1000), 'dd MMM yyyy HH:mm');
                                                    }

                                                }).catch((err) => {
                                                $('#borrow_from_stake').attr('disabled', true);
                                                document.querySelector("#borrow_from_stake").style.display = "block";
                                                document.querySelector("#borrow_from_stake").innerHTML = 'Borrowing is currently disabled';

                                            });
                                        }

                                    }).catch((err) => {
                                    $('#borrow_from_stake').attr('disabled', true);
                                    document.querySelector("#borrow_from_stake").style.display = "block";
                                    document.querySelector("#borrow_from_stake").innerHTML = 'Borrowing is currently disabled';
                                });


                                //////

                            }


                        }).catch((err) => {
                    });


                } else {
                    document.querySelector("#has_no_stake").style.display = "block";
                }
            }).catch((err) => {
        });


        $('#stake').html("Stake " + assetSymbol);
        //show amount text view
        const contractFirst = new web3.eth.Contract(
            erc20tokenAbi,
            assetAddress
        );
        console.log('address ' + selectedAccount);
        const balance = await contractFirst.methods.balanceOf(selectedAccount).call();
        console.log('balance ' + balance);
        const decimals = await contractFirst.methods.decimals().call();
        console.log('decimals ' + decimals);


        //const balance = await web3.eth.getBalance(address);
        // const ethBalance = web3.utils.fromWei(balance, "ether");
        ethBalance = balance / (10 ** decimals);


        console.log('ethBalance ' + ethBalance);

        const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

        accountContainer.innerHTML = 'Connected To<br>' + getChainExplorerLink(assetChain, truncate(selectedAccount, 12), selectedAccount) + ' (' + nFormatter(humanFriendlyBalance, 2) + ' ' + assetSymbol + ')';
    }


    $('#stake').attr('disabled', false);

}

async function doStake() {
    var stakeAmount = document.querySelector('#amount').value;
    console.log('stake: ' + stakeAmount);

    var realMinAmount = minAmount / (10 ** assetDecimals);

    if (stakeAmount > ethBalance) {
        showInfoModal('Stake', 'Insufficient balance');
        $('#stake').attr('disabled', false);
        return;
    }

    if (stakeAmount < realMinAmount) {
        showInfoModal('Stake', 'Please enter amount greater than ' + realMinAmount + ' '+assetSymbol );
        $('#stake').attr('disabled', false);
        return;
    }

    if (!await isCorrectChain(assetChain)) {
        console.log("NOT isCorrectChain");
        correctChain(assetChain);
    } else {
        console.log("isCorrectChain !!!");
        checkAllowance_(true);
    }
}

async function checkAllowance_(doSet) {
    const web3 = new Web3(provider);
    const contractFirst = new web3.eth.Contract(
        erc20tokenAbi,
        assetAddress
    );

    contractFirst.methods.allowance(selectedAccount, stakeAddress).call().then(function (result) {
        console.log('getAllowance: ' + result)
        var costAmount = 11412312312312312312312312312313234;

        if (parseInt(result) > costAmount) {
            // mint(mintAmount);
            console.log('DO STAKE!!!')
            performStake();

        } else {
            if (doSet) {
                console.log('set allowance')
                setAllowance_();
            } else {
                $('#stake').attr('disabled', false);
            }
        }
    });

}

async function setAllowance_() {
    const web3 = new Web3(provider);
    $('#stake').attr('disabled', true);

    const contractFirst = new web3.eth.Contract(
        erc20tokenAbi,
        assetAddress
    );

    Loader.open();
    document.querySelector("#loader_text").textContent = 'Approval...';
    contractFirst.methods.approve(stakeAddress, '23412312312312312312312312312313234').send({from: selectedAccount, gasPrice: '60000000000', gasLimit: 400000})
        .then(function (receipt) {
            setTimeout(() => {
                console.log("wait!");
            }, 5000);
            Loader.close();
            checkAllowance_(false);

        }).catch((err) => {
        console.log("set allowance error");
        $('#stake').attr('disabled', false);
        Loader.close();
    });

}

function showInfoModal(title, message) {
    $("#infomodal").modal('show');
    $("#info-title").html(title);
    $("#info-text").html(message);
    $("#info_option_1").hide();
}

/**
 * Main entry point.
 */
window.addEventListener('load', async () => {
    console.log("**** SP load events");


    document.addEventListener('selectAccount', e => {
        if (isConnectedMetamask()) {
            onConnected();
        } else {

            console.log("**** SP selectAccount NOT isConnectedMetamask");
            document.querySelector("#wallet_connected").style.display = "none";
            document.querySelector("#connect_wallet").textContent = 'Connect wallet'
            document.querySelector("#connect_wallet").setAttribute("disabled", "disabled")

            if (isHttps) {
                document.querySelector("#connect_wallet").removeAttribute("disabled")
            }

        }

    });

    document.addEventListener('refreshingAccountData', e => {
        document.querySelector("#connect_wallet").style.display = "block";
        document.querySelector("#wallet_connected").style.display = "none";
        document.querySelector("#connect_wallet").setAttribute("disabled", "disabled")

    });


    document.addEventListener('metamaskNotAvailable', e => {
        document.querySelector("#connect_wallet").style.display = "block";
        document.querySelector("#wallet_connected").style.display = "none";

        document.querySelector("#connect_wallet").textContent = 'You need to install Metamask browser addon'
        document.querySelector("#connect_wallet").disable = true;
    });


    document.querySelector("#stake").addEventListener("click", function () {
        doStake();
    });

    document.querySelector("#switch").addEventListener("click", async function () {
        if (!await isCorrectChain(assetChain)) {
            console.log("NOT isCorrectChain");
            correctChain(assetChain);
        }
    });

    document.querySelector("#relase_stake").addEventListener("click", function () {
        releaseStake();
    });

    document.querySelector("#borrow_from_stake").addEventListener("click", function () {
        borrowAmount();
    });

    document.querySelector("#connect_wallet").addEventListener("click", onConnect);


});


