function btnCalculate_Click(){

	var monthlyIncome=parseFloat((document.getElementById("mnlyIncome")).value);
	var alimonyIncome=parseFloat((document.getElementById("almyIncome")).value);
	var otherIncome=parseFloat((document.getElementById("othrIncome")).value);

	var creditcardPmt=parseFloat((document.getElementById("ccPmt")).value);
	var carPayment=parseFloat((document.getElementById("carPmt")).value);
	var otherPmt=parseFloat((document.getElementById("othrPmt")).value);


    var totalIncome = monthlyIncome + alimonyIncome + otherIncome;
    (document.getElementById("tlInc")).innerHTML = "$" + totalIncome;


    var totalExpenses = creditcardPmt+carPayment+otherPmt;
    (document.getElementById("tlExp")).innerHTML = "$" + totalExpenses;


   	var two9percent= (totalIncome * .29);
   	var	three9percent= (totalIncome - totalExpenses) * .39;

   	var maxPayment=document.getElementById("maxPmt");
   	var percent=document.getElementById("prcntUsed");

   	if( two9percent < three9percent){
   		maxPayment.innerHTML= "$" + two9percent.toString().match(/^\d+(?:\.\d{0,2})?/);
   		percent.innerHTML= "29%";
   	}
   	else{
   		maxPayment.innerHTML= "$" + three9percent.toString().match(/^\d+(?:\.\d{0,2})?/);
   		percent.innerHTML="39%";
   	}
        }
