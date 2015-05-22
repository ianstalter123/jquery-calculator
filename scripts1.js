//codeacademy

$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
	var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#screen");
    // totaldiv.text("0");
    $(".buttons span").not("#cancel").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $(".operator").not("#calc").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("");
    });
    $("#cancel").click(function(){
		number = "";
		totaldiv.text("");
		
    });
    $("#calc").click(function(){
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "x"){
			number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		}
		totaldiv.text(number);
		testNumLength(number);
		// number = "";
		newnumber = "";
		operator = "";
    });
    });