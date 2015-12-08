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
      var value = parseInt($("input.text").val(),0);
      SimpleStorage.set(value);
      addToLog("SimpleStorage.set("+value+")");
      Meteor.call('groupmeTest',function(err,res){
        console.log(res);
      })
    }
  });
}
