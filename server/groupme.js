Meteor.methods({
  groupmeMagic: function (data) {
    var API = Meteor.npmRequire('groupme').Stateless;
    const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
    const group_id = "18335909";
    var result = true

    var howManyMessages = function(messages){
      var counter = 0;
      messages.forEach(function(message){
        if (message.sender_id == '13590596'){
          counter += 1;
        }
      })
      return counter;
    }

    API.Messages.index(ACCESS_TOKEN, group_id, [], function(err,ret){
      if (!err) {
        var messages = ret.messages;
        messages = ret.messages;
        var numMessages = howManyMessages(messages);
        if (numMessages > 5){
          console.log("Harrison has sent " + numMessages + " of the last 10 messages! He/she will" +
            " be charged 3 Ether!");
        }
        messages = messages.reverse();
        for (var i = 0; i < 10; i++){
          var message = messages[i]
          if (message.sender_id != '11386760'){
            result =  false;
          }
        }
      }
      else{console.log(err)};
    });
    return result;
  }
})





