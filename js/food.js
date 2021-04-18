
 
 
var name = prompt('please enter your name');
var name;
customername(name)

function customername(name)
{
alert('Hello '+ name);

  var userAge = prompt(name + ' please enter your age?');
var userAge;

alert (name + ' your age is ' + userAge);
}

var foodtype = prompt('do you like healthy food ? yes or no')
while (foodtype !== 'yes' && foodtype !== 'no'){

  var foodtype = prompt('do you like healthy food ? yes or no')
}
if (foodtype == 'yes'){ 
  var image = '<img src="https://ventsmagazine.com/wp-content/uploads/2021/04/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342-1.jpg" alt= "healthy food"/>';
  
   document.write(image) ;
}else if(foodtype == 'no') {
 var image2 = '<img src="https://scx1.b-cdn.net/csz/news/800a/2016/howcuttingdo.jpg" alt= "normal food"/>';
document.write(image2) ;
}

 var type = prompt ('enter the your favorite food please healthy food or unhealthy  ')
while (type !== 'healthy' && type !== 'unhealthy'){

     var type = prompt ('enter the your favorite food please healthy food or unhealthy  ')
   }
alert ('you like '+ type +' food ');

 

var ask;
function askcustomer(add){
  var ask = prompt('do you like to add ' + add + '?');
  while (ask !== 'yes' && ask !== 'no'){

  var ask = prompt('do you like to add ' + add + '?')
}
  return ask;
}
askcustomer('salt');
askcustomer('ketchup');
askcustomer('mayonnaise');
askcustomer('cheese');


