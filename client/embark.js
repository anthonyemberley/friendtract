web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));web3.eth.defaultAccount = web3.eth.accounts[0];SimpleStorageAbi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"increment","outputs":[],"type":"function"},{"inputs":[{"name":"initialValue","type":"uint256"}],"type":"constructor"}];SimpleStorageContract = web3.eth.contract(SimpleStorageAbi);SimpleStorage = SimpleStorageContract.at('0xfffaef2cb521e74772e57fa62d72e4f29be07602');