$(document).ready(function(){

	$("#bouton").click("click",function(){
		$(".div3").remove();

		var terme = $("#search").val();
		var api="https://en.wikipedia.org/w/api.php?action=opensearch&search="+ terme +"&limit=20&format=json&callback=?";
		$.ajax( {
		    url: api,
		    dataType: 'json',
		    type: 'POST',
		    headers: { 'Api-User-Agent': 'Example/1.0' },
		    success: function(data) {
		   	if(data[1].length==0) {
		    $("#container").append("<div class='div3'>Nothing found Sorry ...</div>");

		    	}

		    	else{
		    	for(var i=0; i<20 ; i++)
		       $("#div4").append("<div class='div3'><a target='_blank' href="+data[3][i]+">"+data[1][i]+"</a><br/>"+data[2][i]+"</div>");
		   		$("#div4").slideUp(1000).delay(50).fadeIn(1000);
		   		} 
		    },
		    error: function(errorMessage){
		    	alert("Error");
		    }

		} );
	});

});
	function myfun(e){  if(e.keyCode==13) $('#bouton').click();}
