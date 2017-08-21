#!/bin/sh

# -----------------------------------------------------------------------------
# Run all tests.
# Copyright (c) 2017 Pembient, Inc.
# The MIT License.
# -----------------------------------------------------------------------------

rm -rI /tmp/ethereum_dev_mode/
# geth --dev --rpc --rpccorsdomain '*' console 2>> geth.log
# geth --dev --preload "test-crowdsale.js" console 2>> geth.log
geth --dev js "test-crowdsale.js" 2>> geth.log 1> test-crowdsale.out
diff -sq test-crowdsale.txt test-crowdsale.out
