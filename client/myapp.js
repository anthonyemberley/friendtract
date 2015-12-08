if (Meteor.isClient) {
  Session.setDefault('value', 0);

  var addToLog = function(txt) {
    $(".logs").append("<br>" + txt);
  }

  Template.current_value.helpers({
    value: function () {
      return Session.get('value');
    }
  });

  Template.current_value.events({
    'click button': function () {
      var value = SimpleStorage.get().toNumber();
      Session.set('value', value);
      addToLog("SimpleStorage.get()");
    }
  });

  Template.increment_value.events({
    'click button': function () {
      var value = SimpleStorage.get().toNumber();
      value += 1;
      SimpleStorage.set(value);
      addToLog("SimpleStorage.increment("+1+")");
    }
  });

  Template.set_value.events({
    'click button': function () {
      var API = require('groupme').Stateless;
      const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
      var value = parseInt($("input.text").val(), 0);
      SimpleStorage.set(value);
      addToLog("SimpleStorage.set("+value+")");
    }
  });
}

if (Meteor.isServer) {
  console.log("here");
  Meteor.startup(function () {
    //var index = require('./index.js');
    var API = require('groupme').Stateless;
    const ACCESS_TOKEN = "f487ce307f3601338c7306fd38831e3b";
    const group_id = "18335909";
    API.Users.me(ACCESS_TOKEN, function(err,ret) {
      if (!err) {
        console.log("Your user id is", ret.id, "and your name is", ret.name);        
      }
    });

    
        API.Messages.index(ACCESS_TOKEN, group_id, [], function(err,ret){
        if (!err) {
          console.log(ret.messages);  
          ret.messages.forEach(function(message){
            if(message.sender_id == '11386760'){
              console.log("we did it");
              //SimpleStorage.set(101);
              //gotText();
            }
          })      
        }
      })
  });
}
