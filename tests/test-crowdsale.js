// -----------------------------------------------------------------------------
// Tests the PembiCoinICO.sol contract.
// Copyright (c) 2017 Pembient, Inc.
// The MIT License.
// -----------------------------------------------------------------------------

loadScript("harness.js");

function newContract() {
  //------------------------------------------------------------
  var icoContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"currentState","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"setFailed","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"refund","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"payout","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"setActive","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"setSuccessful","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"setIdle","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_i","type":"uint256"}],"name":"getContribution","outputs":[{"name":"o_contributor","type":"address"},{"name":"o_amount","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contributorCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_amount","type":"uint256"}],"name":"Transferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_subject","type":"address"},{"indexed":true,"name":"_object","type":"address"},{"indexed":false,"name":"_oldState","type":"uint8"},{"indexed":false,"name":"_newState","type":"uint8"}],"name":"Transitioned","type":"event"}]);
  var ico = icoContract.new(
    {
      from: pembient,
      data: '0x606060405260016000806101000a81548160ff0219169083600381111561002257fe5b02179055506000600155341561003757600080fd5b5b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b610e198061008a6000396000f300606060405236156100a2576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630c3f6acf1461028c578063146901db146102c3578063590e1ae3146102d857806363bd1d4a146102ed578063760a8c2a146103025780638ad14ee6146103175780638da5cb5b1461032c578063a494817b14610381578063cef4225414610396578063ecfd892814610400575b5b60008060009054906101000a900460ff1660038111156100bf57fe5b8160038111156100cb57fe5b1415156100d757600080fd5b6000341115156100e657600080fd5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415610196573360036000600154815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061018f6001546001610429565b6001819055505b6101df600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205434610429565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fd1ba4ac2e2a11b5101f6cb4d978f514a155b421e8ec396d2d9abaf0bb02917ee346040518082815260200191505060405180910390a35b5b50005b341561029757600080fd5b61029f61044f565b604051808260038111156102af57fe5b60ff16815260200191505060405180910390f35b34156102ce57600080fd5b6102d6610461565b005b34156102e357600080fd5b6102eb6105c5565b005b34156102f857600080fd5b61030061075c565b005b341561030d57600080fd5b6103156108f8565b005b341561032257600080fd5b61032a610a5c565b005b341561033757600080fd5b61033f610bc0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038c57600080fd5b610394610be6565b005b34156103a157600080fd5b6103b76004808035906020019091905050610d49565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b341561040b57600080fd5b610413610de7565b6040518082815260200191505060405180910390f35b600081830190508281101580156104405750818110155b151561044857fe5b5b92915050565b6000809054906101000a900460ff1681565b600060016000809054906101000a900460ff16600381111561047f57fe5b81600381111561048b57fe5b14151561049757600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104f357600080fd5b6000809054906101000a900460ff16915060036000806101000a81548160ff0219169083600381111561052257fe5b02179055503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe9ed7c8788612648049556b046b8ca806767063db36cb7f1b65ab87df0bd47c6846000809054906101000a900460ff166040518083600381111561059657fe5b60ff1681526020018260038111156105aa57fe5b60ff1681526020019250505060405180910390a35b5b5b5050565b600060036000809054906101000a900460ff1660038111156105e357fe5b8160038111156105ef57fe5b1415156105fb57600080fd5b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915060008211801561066457503073ffffffffffffffffffffffffffffffffffffffff16318211155b151561066c57fe5b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f1935050505015156106f157600080fd5b3373ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fd1ba4ac2e2a11b5101f6cb4d978f514a155b421e8ec396d2d9abaf0bb02917ee846040518082815260200191505060405180910390a35b5b5050565b600060026000809054906101000a900460ff16600381111561077a57fe5b81600381111561078657fe5b14151561079257600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107ee57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16319150600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050151561086a57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff167fd1ba4ac2e2a11b5101f6cb4d978f514a155b421e8ec396d2d9abaf0bb02917ee846040518082815260200191505060405180910390a35b5b5b5050565b600060016000809054906101000a900460ff16600381111561091657fe5b81600381111561092257fe5b14151561092e57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561098a57600080fd5b6000809054906101000a900460ff16915060008060006101000a81548160ff021916908360038111156109b957fe5b02179055503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe9ed7c8788612648049556b046b8ca806767063db36cb7f1b65ab87df0bd47c6846000809054906101000a900460ff1660405180836003811115610a2d57fe5b60ff168152602001826003811115610a4157fe5b60ff1681526020019250505060405180910390a35b5b5b5050565b600060016000809054906101000a900460ff166003811115610a7a57fe5b816003811115610a8657fe5b141515610a9257600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610aee57600080fd5b6000809054906101000a900460ff16915060026000806101000a81548160ff02191690836003811115610b1d57fe5b02179055503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe9ed7c8788612648049556b046b8ca806767063db36cb7f1b65ab87df0bd47c6846000809054906101000a900460ff1660405180836003811115610b9157fe5b60ff168152602001826003811115610ba557fe5b60ff1681526020019250505060405180910390a35b5b5b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000809054906101000a900460ff166003811115610c0357fe5b816003811115610c0f57fe5b141515610c1b57600080fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610c7757600080fd5b6000809054906101000a900460ff16915060016000806101000a81548160ff02191690836003811115610ca657fe5b02179055503073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fe9ed7c8788612648049556b046b8ca806767063db36cb7f1b65ab87df0bd47c6846000809054906101000a900460ff1660405180836003811115610d1a57fe5b60ff168152602001826003811115610d2e57fe5b60ff1681526020019250505060405180910390a35b5b5b5050565b60008060008310158015610d5e575060015483105b1515610d6957600080fd5b6003600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b915091565b600154815600a165627a7a72305820ac21cc63352a00c6595ed5f97ff671c454ebe11ffd06d67b9095acdb0b1bee080029',
      gas: '4300000'
    }
  );
  //------------------------------------------------------------
  // web3.js callbacks unreliable in "--dev js" vs. "--dev console" mode
  // see also: https://github.com/jpmorganchase/quorum/issues/86
  // workaround is to mine the contract and explicitly set its address
  var hash = ico.transactionHash;
  commit();
  var address = eth.getTransactionReceipt(hash).contractAddress;
  aliases[address] = "ico";
  return icoContract.at(address);
}

function printContract(ico) {
  console.log("  currentState: "     + ico.currentState.call());
  console.log("  contributorCount: " + ico.contributorCount.call());
  console.log("  owner: "            + aliases[ico.owner.call()]);
  console.log("  contributions:");
  for (var i = 0; i < ico.contributorCount.call(); i++) {
    var contrib = ico.getContribution(i);
    console.log("    " + aliases[contrib[0]] + ", " + contrib[1] + " wei");
  }
}

function printLastEvent(ico, range) {
  ico.allEvents(range).get(
    function(error, eventResult) {
      if (eventResult.length === 0) {
        console.log("EVENT > nothing happened");
      } else if (eventResult[0].event === "Transitioned") {
        console.log(
          "EVENT > "
          + aliases[eventResult[0].args._subject] + " transitioned "
          + aliases[eventResult[0].args._object]  + " from state "
          + eventResult[0].args._oldState         + " to state "
          + eventResult[0].args._newState
        );
      } else if (eventResult[0].event === "Transferred") {
        console.log(
          "EVENT > "
          + aliases[eventResult[0].args._from] + " transferred "
          + eventResult[0].args._amount        + " wei to "
          + aliases[eventResult[0].args._to]
        );
      }
    }
  );
}

// TESTS -----------------------------------------------------------------------

doTest(
  "payment in state 0 as alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
  }
);

doTest(
  "payment in state 1 as alice",
  function (ico) {
    ico.setIdle({from: pembient}); commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
  }
);

doTest(
  "payment in state 2 as alice",
  function (ico) {
    ico.setSuccessful({from: pembient}); commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
  }
);

doTest(
  "payment in state 3 as alice",
  function (ico) {
    ico.setFailed({from: pembient}); commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
  }
);

doTest(
  "double payment by alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
    commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
  }
);

doTest(
  "payment bob after alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.25, "ether")}
    );
    commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(0.15, "ether")}
    );
  }
);

doTest(
  "no payment as mallory",
  function (ico) {
    ico.setActive({from: pembient}); commit();
  },
  function (ico) {
    eth.sendTransaction(
      {from: mallory, to: ico.address, value: web3.toWei(0, "ether")}
    );
  }
);

doTest(
  "refund in state 0 as alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
  },
  function (ico) {
    ico.refund({from: alice});
  }
);

doTest(
  "refund in state 1 as alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
  },
  function (ico) {
    ico.refund({from: alice});
  }
);

doTest(
  "refund in state 2 as alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
    ico.setSuccessful({from: pembient}); commit();
  },
  function (ico) {
    ico.refund({from: alice});
  }
);

doTest(
  "refund in state 3 as alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
    ico.setFailed({from: pembient}); commit();
  },
  function (ico) {
    ico.refund({from: alice});
  }
);

doTest(
  "refund bob after alice",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
    ico.setFailed({from: pembient}); commit();
    ico.refund({from: alice}); commit();
  },
  function (ico) {
    ico.refund({from: bob});
  }
);

doTest(
  "refund requested by non-contributor mallory",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
    ico.setFailed({from: pembient}); commit();
  },
  function (ico) {
    ico.refund({from: mallory});
  }
);

doTest(
  "refund requested twice by mallory",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: mallory, to: ico.address, value: web3.toWei(1.2, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
    ico.setFailed({from: pembient}); commit();
    ico.refund({from: mallory}); commit();
  },
  function (ico) {
    ico.refund({from: mallory});
  }
);

doTest(
  "disarmed reentrant attack by mallory",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    //------------------------------------------------------------
    var _victim = ico.address;
    var reentrantContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"disarm","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"victim","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"attack","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"requestRefund","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_victim","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]);
    var reentrant = reentrantContract.new(
      _victim,
      {
        from: mallory,
        data: '0x606060405260008060146101000a81548160ff021916908315150217905550341561002957600080fd5b604051602080610419833981016040528080519060200190919050505b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505b610381806100986000396000f3006060604052361561006b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063370419e51461011d5780638398508214610132578063930c2003146101475780639e5faafc1461019c578063d5cef133146101c9575b5b600060149054906101000a900460ff161561011a576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663590e1ae36040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561010557600080fd5b6102c65a03f1151561011657600080fd5b5050505b5b005b341561012857600080fd5b6101306101de565b005b341561013d57600080fd5b610145610265565b005b341561015257600080fd5b61015a610282565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a757600080fd5b6101af6102a7565b604051808215151515815260200191505060405180910390f35b34156101d457600080fd5b6101dc6102ba565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff163160405160006040518083038185876187965a03f192505050506001600060146101000a81548160ff0219169083151502179055505b565b60008060146101000a81548160ff0219169083151502179055505b565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663590e1ae36040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561033e57600080fd5b6102c65a03f1151561034f57600080fd5b5050505b5600a165627a7a72305820d06efc8c228e625efe1683647fa679356f2b788fa3a227ec527c87932501474b0029',
        gas: '4300000'
      }
    );
    //------------------------------------------------------------
    var hash = reentrant.transactionHash;
    commit();
    var address = eth.getTransactionReceipt(hash).contractAddress;
    var reentrant = reentrantContract.at(address);
    aliases[reentrant.address] = "reentrant";
    eth.sendTransaction(
      {from: mallory, to: reentrant.address, value: web3.toWei(0.01, "ether")}
    );
    commit();
    reentrant.arm({from: mallory, gas: 300000}); commit();
    ico.setIdle({from: pembient}); commit();
    ico.setFailed({from: pembient}); commit();
    reentrant.disarm({from: mallory}); commit();
    return reentrant;
  },
  function (ico, reentrant) {
    reentrant.requestRefund({from: mallory});
  },
  function cleanup(ico, reentrant) {
    delete aliases[reentrant.address];
  }
);

doTest(
  "armed reentrant attack by mallory",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    //------------------------------------------------------------
    var _victim = ico.address;
    var reentrantContract = web3.eth.contract([{"constant":false,"inputs":[],"name":"arm","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"disarm","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"victim","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"attack","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"requestRefund","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"_victim","type":"address"}],"payable":false,"type":"constructor"},{"payable":true,"type":"fallback"}]);
    var reentrant = reentrantContract.new(
      _victim,
      {
        from: mallory,
        data: '0x606060405260008060146101000a81548160ff021916908315150217905550341561002957600080fd5b604051602080610419833981016040528080519060200190919050505b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505b610381806100986000396000f3006060604052361561006b576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063370419e51461011d5780638398508214610132578063930c2003146101475780639e5faafc1461019c578063d5cef133146101c9575b5b600060149054906101000a900460ff161561011a576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663590e1ae36040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561010557600080fd5b6102c65a03f1151561011657600080fd5b5050505b5b005b341561012857600080fd5b6101306101de565b005b341561013d57600080fd5b610145610265565b005b341561015257600080fd5b61015a610282565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a757600080fd5b6101af6102a7565b604051808215151515815260200191505060405180910390f35b34156101d457600080fd5b6101dc6102ba565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff163160405160006040518083038185876187965a03f192505050506001600060146101000a81548160ff0219169083151502179055505b565b60008060146101000a81548160ff0219169083151502179055505b565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663590e1ae36040518163ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401600060405180830381600087803b151561033e57600080fd5b6102c65a03f1151561034f57600080fd5b5050505b5600a165627a7a72305820d06efc8c228e625efe1683647fa679356f2b788fa3a227ec527c87932501474b0029',
        gas: '4300000'
      }
    );
    //------------------------------------------------------------
    var hash = reentrant.transactionHash;
    commit();
    var address = eth.getTransactionReceipt(hash).contractAddress;
    var reentrant = reentrantContract.at(address);
    aliases[reentrant.address] = "reentrant";
    eth.sendTransaction(
      {from: mallory, to: reentrant.address, value: web3.toWei(0.01, "ether")}
    );
    commit();
    reentrant.arm({from: mallory, gas: 300000}); commit();
    ico.setIdle({from: pembient}); commit();
    ico.setFailed({from: pembient}); commit();
    return reentrant;
  },
  function (ico, reentrant) {
    reentrant.requestRefund({from: mallory});
  },
  function cleanup(ico, reentrant) {
    delete aliases[reentrant.address];
  }
);

[pembient, mallory].forEach(
  function (actor) {
    doTest(
      "payout in state 0 as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
        eth.sendTransaction(
          {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
        );
        commit();
        eth.sendTransaction(
          {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
        );
        commit();
      },
      function (ico) {
        ico.payout({from: actor});
      }
    );

    doTest(
      "payout in state 1 as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
        eth.sendTransaction(
          {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
        );
        commit();
        eth.sendTransaction(
          {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
        );
        commit();
        ico.setIdle({from: pembient}); commit();
      },
      function (ico) {
        ico.payout({from: actor});
      }
    );

    doTest(
      "payout in state 2 as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
        eth.sendTransaction(
          {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
        );
        commit();
        eth.sendTransaction(
          {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
        );
        commit();
        ico.setIdle({from: pembient}); commit();
        ico.setSuccessful({from: pembient}); commit();
      },
      function (ico) {
        ico.payout({from: actor});
      }
    );

    doTest(
      "payout in state 3 as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
        eth.sendTransaction(
          {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
        );
        commit();
        eth.sendTransaction(
          {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
        );
        commit();
        ico.setIdle({from: pembient}); commit();
        ico.setFailed({from: pembient}); commit();
      },
      function (ico) {
        ico.payout({from: actor});
      }
    );
  }
);

doTest(
  "double payout to pembient",
  function (ico) {
    ico.setActive({from: pembient}); commit();
    eth.sendTransaction(
      {from: alice, to: ico.address, value: web3.toWei(0.1, "ether")}
    );
    commit();
    eth.sendTransaction(
      {from: bob, to: ico.address, value: web3.toWei(.05, "ether")}
    );
    commit();
    ico.setIdle({from: pembient}); commit();
    ico.setSuccessful({from: pembient}); commit();
    ico.payout({from: pembient}); commit();
  },
  function (ico) {
    ico.payout({from: pembient});
  }
);

[pembient, mallory].forEach(
  function (actor) {
    doTest(
      "state transition {0, 0} as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
      },
      function (ico) {
        ico.setActive({from: actor});
      }
    );

    doTest(
      "state transition {0, 1} as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
      },
      function (ico) {
        ico.setIdle({from: actor});
      }
    );

    doTest(
      "state transition {0, 2} as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
      },
      function (ico) {
        ico.setSuccessful({from: actor});
      }
    );

    doTest(
      "state transition {0, 3} as " + aliases[actor],
      function (ico) {
        ico.setActive({from: pembient}); commit();
      },
      function (ico) {
        ico.setFailed({from: actor});
      }
    );

    doTest(
      "state transition {1, 0} as " + aliases[actor],
      function (ico) {
        ico.setIdle({from: pembient}); commit();
      },
      function (ico) {
        ico.setActive({from: actor});
      }
    );

    doTest(
      "state transition {1, 1} as " + aliases[actor],
      function (ico) {
        ico.setIdle({from: pembient}); commit();
      },
      function (ico) {
        ico.setIdle({from: actor});
      }
    );

    doTest(
      "state transition {1, 2} as " + aliases[actor],
      function (ico) {
        ico.setIdle({from: pembient}); commit();
      },
      function (ico) {
        ico.setSuccessful({from: actor});
      }
    );

    doTest(
      "state transition {1, 3} as " + aliases[actor],
      function (ico) {
        ico.setIdle({from: pembient}); commit();
      },
      function (ico) {
        ico.setFailed({from: actor});
      }
    );

    doTest(
      "state transition {2, 0} as " + aliases[actor],
      function (ico) {
        ico.setSuccessful({from: pembient}); commit();
      },
      function (ico) {
        ico.setActive({from: actor});
      }
    );

    doTest(
      "state transition {2, 1} as " + aliases[actor],
      function (ico) {
        ico.setSuccessful({from: pembient}); commit();
      },
      function (ico) {
        ico.setIdle({from: actor});
      }
    );

    doTest(
      "state transition {2, 2} as " + aliases[actor],
      function (ico) {
        ico.setSuccessful({from: pembient}); commit();
      },
      function (ico) {
        ico.setSuccessful({from: actor});
      }
    );

    doTest(
      "state transition {2, 3} as " + aliases[actor],
      function (ico) {
        ico.setSuccessful({from: pembient}); commit();
      },
      function (ico) {
        ico.setFailed({from: actor});
      }
    );

    doTest(
      "state transition {3, 0} as " + aliases[actor],
      function (ico) {
        ico.setFailed({from: pembient}); commit();
      },
      function (ico) {
        ico.setActive({from: actor});
      }
    );

    doTest(
      "state transition {3, 1} as " + aliases[actor],
      function (ico) {
        ico.setFailed({from: pembient}); commit();
      },
      function (ico) {
        ico.setIdle({from: actor});
      }
    );

    doTest(
      "state transition {3, 2} as " + aliases[actor],
      function (ico) {
        ico.setFailed({from: pembient}); commit();
      },
      function (ico) {
        ico.setSuccessful({from: actor});
      }
    );

    doTest(
      "state transition {3, 3} as " + aliases[actor],
      function (ico) {
        ico.setFailed({from: pembient}); commit();
      },
      function (ico) {
        ico.setFailed({from: actor});
      }
    );
  }
);
