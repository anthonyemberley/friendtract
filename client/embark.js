web3.setProvider(new web3.providers.HttpProvider('http://localhost:8101'));web3.eth.defaultAccount = web3.eth.accounts[0];SimpleStorageAbi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"increment","outputs":[],"type":"function"},{"inputs":[{"name":"initialValue","type":"uint256"}],"type":"constructor"}];SimpleStorageContract = web3.eth.contract(SimpleStorageAbi);SimpleStorage = SimpleStorageContract.at('0xce5b0caef6439db481395f184e22d2584ffd5e35');

// //var index = require('./index.js');
// 	var API = require('groupme').Stateless;
// 	const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
// 	const group_id = "18335909";
// 	API.Users.me(ACCESS_TOKEN, function(err,ret) {
// 	  if (!err) {
// 	    console.log("Your user id is", ret.id, "and your name is", ret.name);        
// 	  }
// 	});
	
// 			API.Messages.index(ACCESS_TOKEN, group_id, [], function(err,ret){
// 			if (!err) {
// 		    console.log(ret.messages);  
// 		    ret.messages.forEach(function(message){
// 		    	if(message.sender_id == '11386760'){
// 		    		console.log("we did it");
// 		    		//SimpleStorage.set(101);
// 		    		//gotText();
// 		    	}
// 		    })      
// 		  }
// 		})