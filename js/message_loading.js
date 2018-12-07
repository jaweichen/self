

$("#myfrom").submit(function(event){

	event.preventDefault();
	$("#container_message").hide();
	$("#fixed_footer").show();
    $("#loading_area").show();
    setTimeout(runsubmit,5000);
})

function runsubmit(){

  $("#loading_area").hide();
  window.alert("送出成功")
}



//window.alert("success")