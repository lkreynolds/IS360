function btnCalculate_Click(){

	var principal=parseFloat((document.getElementById("inputPrincipal")).value);
	var term=parseFloat((document.getElementById("inputTerm")).value);
	var rate=parseFloat((document.getElementById("inputRate")).value);


   	var compoundInterest=document.getElementById("outputInterest");
/*
for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}
Loop for the number of periods 
In the loop, calculate the interest (current balance) * (interest rate) 
In the loop calculate the new current balance by adding the old current balance and the current interest. 
The loop should execute for the total number of periods.
*/
var currentBalance=principal;
var interest;
for( i=0; i<term; i++){
	interest=currentBalance*(rate/100);
	currentBalance=currentBalance+interest;
}

 compoundInterest.innerHTML= "$" + currentBalance.toString().match(/^\d+(?:\.\d{0,2})?/);

}