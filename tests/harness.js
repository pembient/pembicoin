// -----------------------------------------------------------------------------
// Prepare accounts and helper functions to support testing.
// Copyright (c) 2017 Pembient, Inc.
// The MIT License.
// -----------------------------------------------------------------------------

function printBalances() {
  var total = 0;
  for (var address in aliases) {
    var balance = web3.fromWei(eth.getBalance(address), "wei");
    total += parseFloat(balance);
    console.log(
      "  "
      + (aliases[address] + "          ").substr(0, 10)
      + "              "
      + ("                        " + balance).substr(-24, 24) + " wei"
    );
  }
  console.log(
    "                    Total:"
    + ("                        " + total).substr(-24, 24) + " wei"
  );
}

function commit() {
  var fromBlock = eth.blockNumber + 1;
  miner.start(1);       // single threaded
  admin.sleepBlocks(1); // sleeps until blocks added >= 1
  miner.stop();
  return {fromBlock: fromBlock, toBlock: eth.blockNumber};
}

function createAccounts(totalAccts) {
  for (var i = 0; i < totalAccts; i++) {
    personal.newAccount("");
  }
}

function unlockAccounts() {
  for (var i = 0; i < eth.accounts.length; i++) {
    personal.unlockAccount(eth.accounts[i], "", 0); // unlock indefinitely
  }
}

function initBalances(ethPerAcct, vault) {
  var totalEth = eth.accounts.length * ethPerAcct;
  // mine ETH into first account
  miner.setEtherbase(eth.accounts[0]);
  miner.start();
  while (web3.fromWei(eth.getBalance(eth.accounts[0]), "ether") < totalEth) {
    admin.sleepBlocks(1);
  }
  miner.stop();
  miner.setEtherbase(vault);
  // spread mined ETH equally across accounts
  for (var i = 0; i < eth.accounts.length; i++) {
    eth.sendTransaction({
      from:  eth.accounts[i],
      to:    eth.accounts[i+1] ? eth.accounts[i+1] : vault,
      value: eth.getBalance(eth.accounts[i]) - web3.toWei(ethPerAcct, "ether")
    });
    commit();
  }
}

var aliases = {};
var blackhole = "0x0000000000000000000000000000000000000001";
if (eth.accounts.length === 0) {
  createAccounts(4);
  unlockAccounts();
  initBalances(10, blackhole);
} else if (eth.accounts.length === 4) {
  console.log("Proceeding with existing accounts…");
  console.log("");
  unlockAccounts();
} else {
  console.log("Abnormal test environment! Delete network and retry.");
  console.log("Press Ctrl+C eleven times to exit.");
  while (1); // no good way to halt execution
}
var pembient  = eth.accounts[0]; aliases[pembient] = "pembient";
var alice     = eth.accounts[1]; aliases[alice]    = "alice";
var bob       = eth.accounts[2]; aliases[bob]      = "bob";
var mallory   = eth.accounts[3]; aliases[mallory]  = "mallory";
miner.setEtherbase(blackhole);

//function newContract();
//function printContract(contract);
//function printLastEvent(contract, range);

function doTest(subtitle, precondition, testcase, cleanup) {
  var contract = newContract();
  console.log("Test - " + subtitle);
  var passthru = precondition(contract);
  console.log("======================================================");
  printContract(contract);
  console.log("------------------------------------------------------");
  printBalances();
  console.log("------------------------------------------------------");
  testcase(contract, passthru);
  var range = commit();
  printLastEvent(contract, range);
  console.log("------------------------------------------------------");
  printContract(contract);
  console.log("------------------------------------------------------");
  printBalances();
  console.log("======================================================");
  if (cleanup !== undefined) { cleanup(contract, passthru); }
  console.log("");
  console.log("");
  delete aliases[contract.address];
}

//printBalances();
