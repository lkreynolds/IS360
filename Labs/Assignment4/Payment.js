function btnCalculatePmt_Click(){

	var principal=parseFloat((document.getElementById("inputPrincipal")).value);
	var term=12*(parseFloat((document.getElementById("inputTerm")).value));
	var rate=parseFloat((document.getElementById("inputRate")).value)/100;
		rate=rate/12;
   	var payment=document.getElementById("outputPayment");

   	var numerator=rate*principal;
   	var denominator = 1- Math.pow((1+rate),(-1*term));
   	payment.innerHTML= (numerator/denominator).toString().match(/^\d+(?:\.\d{0,2})?/);



var currentBalance=principal;
var interest;
for( i=0; i<term; i++){
	interest=currentBalance*(rate/100);
	currentBalance=currentBalance+interest;
	}

}