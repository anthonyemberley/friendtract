if (Meteor.isClient) {

  var checkGroupmeStatus = function(){
    var data = Session.get('contractData');
    Meteor.call('groupmeMagic',data,function(err,res){
      if (err){
        throw err;
      }
      else{
        console.log(res);
      }
    })
    setTimeout(checkGroupmeStatus,1000);
  };

  Session.setDefault('value', 0);

  var addToLog = function(txt) {
    $(".logs").append("<br>" + txt);
  };

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
    }
  });

  Template.header.events({
    'click .button.mods': function(event){
       $('.ui.modal')
        .modal('setting', 'closable', false)
         .modal('show'); 
    }
  })

  Template.make_contract.onRendered(function(){
      $('.info').hide();
  });
  

  Template.make_contract.events({
    'click button.deploy': function(event){
      event.preventDefault();
      var data;
      var accessToken = $('#accessToken')[0].value;
      var groupID = $('#groupID')[0].value;
      var username = $('#username')[0].value;
      var messageCap = $('#messageCap')[0].value;
      var etherAmount = $('#etherAmount')[0].value;
      // var sendingAddress = $('#sendingAddress')[0].value;
      var recipientAddress = $('#recipientAddress')[0].value;
      var etherAddress = $('#ethereumAddress')[0].value;
      data = {
        "accessToken":accessToken,
        "groupID":groupID,
        "username":username,
        "messageCap":messageCap,
        "etherAmount":etherAmount,
        // "sendingAddress":sendingAddress,
        "recipientAddress":recipientAddress,
        "etherAddress":etherAddress
      };
      Session.set('contractData',data);
              checkGroupmeStatus();


      $('.ui.modal')
         .modal('hide');

      $
      $('.info').show();
    }
    


  });

}
