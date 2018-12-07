
var lists=["pillow","chopstick_holder","coaster","cookie","mug","key_ring"];


var n=1;

while(n<=lists.length){
  $("#"+lists[n]).hide();
  n++;
}

function getshow(mynumber){
  $('#'+lists[mynumber]).show();

  for(var i=0;i<lists.length;i++){
  	if(i==mynumber){
  		continue;
  	}else{
  		$("#"+lists[i]).hide();
  	}
  	

  }
}






