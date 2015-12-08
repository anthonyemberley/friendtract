//// var botConfig = { token:'f487ce307f3601338c7306fd38831e3b',
////                   group:'18335909',
////                   name:'My Bot',
////                   url:'localhost:3000' };
//var bot = Meteor.npmRequire('fancy-groupme-bot');
//console.log("bot");
//var util = Meteor.npmRequire('util');
//// local configuration read from env.
//const TOKEN = 'f487ce307f3601338c7306fd38831e3b'; // your groupme api token
//const GROUP = '18335909'; // the room you want to join
//const NAME = "botsy"; // the name of your bot
//const URL = 'http://localhost:9000'; // the domain you're serving from, should be accessible by Groupme.
//const CONFIG = {token:TOKEN, group:GROUP, name:NAME, url:URL};
//
//
//var mybot = bot(CONFIG);
//
//mybot.on('botRegistered', function(b) {
//  console.log("I am registered");
//  b.message("WHAT UP BRO?");
//});
//
//var timeout = function(){
//  console.log("1 second");
//  setTimeout(timeout,1000);
//
//}
//
//timeout();
//
//console.log("dsfkljdsfkld")
//
//mybot.on('botMessage', function(b, message) {
//  console.log(message.name + " said " + message.text);
//  // if (message.name != b.name) {
//  //   b.message(message.name + " said " + message.text);
//  // }
//});
//
//console.log("i am serving");
//mybot.serve(9000);