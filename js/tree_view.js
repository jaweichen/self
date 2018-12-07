

function tree_number(number1){
   
   
   console.log($('#add'+number1))
   $('.tree_li'+number1).toggle();
   
   var $number1=$("#add"+number1);

 if($number1.html()=='<img src="img/remove.png">'){
 	$number1.html("<img src='img/add.png'/>")
 }else{
 	$number1.html("<img src='img/remove.png'/>")
 }  
   
   
}






