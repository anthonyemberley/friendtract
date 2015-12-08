
Meteor.methods({
  groupmeMagic: function (data) {
    var API = Meteor.npmRequire('groupme').Stateless;
    const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
    const group_id = "18335909";
    console.log(data);
    API.Users.me(ACCESS_TOKEN, function(err,ret) {
      if (err) {
        throw err;
      }
      //console.log("Your user id is", ret.id, "and your name is", ret.name);
    });

    API.Messages.index(ACCESS_TOKEN, group_id, [], function(err,ret){
      if (!err) {
        ret.messages.forEach(function(message){
          if(message.sender_id == '11386760'){
            //SimpleStorage.set(101);
            //gotText();
          }
        })
      }
      else{
        throw err;
      }
    });

    return ACCESS_TOKEN;
  }

})





