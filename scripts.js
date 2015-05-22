$(function() {
var newV = 0;
var oldV = 0;
var val = "";
var op = "";
var el = $(this);
   $("#cancel").click(function(){
		val = "";
		var oldV = 0;
		var newV = 0;
		$('#screen').text("");		
    });

$('.buttons span').not("#cancel").click(function(){
	var el = $(this);
	if(el.attr('class') !== 'operator'){
    val += el.html();
    $('#screen').html(val);
  		
	}
    });	

$(".operator").not("#calc").click(function(){
		op = $(this).text();
		oldV = val;
		val = "";
		$('#screen').text("");
    });
	
	
$("#calc").click(function(){
	var el = $(this);
	if (el.html() == "="){

				if(op == "+")
				{
					$('#screen').html("");
					val = Math.floor(parseInt(val) + parseInt(oldV));
					$('#screen').html(val);
				}
				if(op == "-")
				{
					$('#screen').html("");
					val = parseInt(oldV) - parseInt(val);	
					$('#screen').html(val);
				}
				if(op == "x")
				{
					$('#screen').html("");
					val = parseInt(oldV) * parseInt(val);	
					$('#screen').html(val);
				}
				if(op == "/")
				{
					$('#screen').html("");
					val = Math.floor(parseInt(oldV) / parseInt(val));	
					$('#screen').html(val);
				}
					
		oldV = "";
		op = "";
	}
	
});
});
	

		



