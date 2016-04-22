var app = angular.module('messageApp', []);

app.controller('MessageController', function($http){
  var mess = this;
  mess.words = '';
  mess.messageArray = [];
  mess.previousArray = [];
  mess.showNew = false;
  mess.showPrevious = false;

  mess.showWords = function(){
    mess.messageArray.unshift(mess.words);
    mess.showNew = true;

    if(mess.messageArray.length > 1){
      mess.previousArray.push(mess.messageArray[1]);
      mess.showPrevious = true;
    }
  mess.words = '';
  };

})
