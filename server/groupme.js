Meteor.methods({
  groupmeMagic: function (data) {
    var API = Meteor.npmRequire('groupme').Stateless;
    const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
    const group_id = "18335909";
    var result = true
    API.Messages.index(ACCESS_TOKEN, group_id, [], function(err,ret){
      if (!err) {
        var messages = ret.messages;
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





