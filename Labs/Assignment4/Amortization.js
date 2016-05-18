/*   Create a new table cell (column 1). Store the beginning balance in the table cell.
   Create a new table cell (column 2). Store the payment in the table cell. This value will be the same for all rows.

   Create a new table cell (column 3). Calculate the current interest by multiplying the beginning balance by the monthly interest
   rate. Store the value in the table cell.
   Create a new table cell (column 4). Calculate the current principal by subtracting the current interest from the payment amount.
   Store the value in the cell.




   Create a new table cell (column 5). Calculate the new balance by subtracting the current principal 
   amount from the beginning balance. Store the value in the cell. This new balance becomes the beginning balance for the next period.
   Create a new table cell (column 6). Display the period. This number should be the same as the loop's counter.
   Add all of the cells to the table row.
   Add the table row to the table. */

  function btnShowAmortization_Click(){
	var principal=parseFloat((document.getElementById("inputPrincipal")).value);
	var term=12*(parseFloat((document.getElementById("inputTerm")).value));
	var rate=parseFloat((document.getElementById("inputRate")).value)/100;
		rate=rate/12;
   	var payment=document.getElementById("outputPayment").value;
   	var table=document.getElementById("amortizationTable");

   	var cell1, cell2, cell3, cell4, cell5, cell6;
   	var row;
   	var balance=principal;
   	var currentInterest, currentPrincipal, newBalance;
      var header;

      // create header row
      header=table.createTHead();
      row=table.insertRow(0);
      cell1= row.insertCell(0);
      cell2= row.insertCell(1);
      cell3= row.insertCell(2);
      cell4= row.insertCell(3);
      cell5= row.insertCell(4);
      cell6= row.insertCell(5);
      cell1.setAttribute("id", "cell"); 
      cell2.setAttribute("id", "cell"); 
      cell3.setAttribute("id", "cell"); 
      cell4.setAttribute("id", "cell"); 
      cell5.setAttribute("id", "cell"); 
      cell6.setAttribute("id", "cell");
      cell1.innerHTML="Beg. Balance";
      cell2.innerHTML="Payment";
      cell3.innerHTML="Interest";
      cell4.innerHTML="Principal";
      cell5.innerHTML="Balance";
      cell6.innerHTML="Period";


   	for(i = 1; i < term+1; i++){
   		   		   		
   		row = table.insertRow(i);
         row.setAttribute("id", "row")
   		cell1 = row.insertCell(0);   		
   		cell1.setAttribute("id", "cell"); 
   		
   		cell2 = row.insertCell(1);   		
   		cell2.setAttribute("id", "cell");
   		
   		cell3 = row.insertCell(2);
   		cell3.setAttribute("id", "cell");
   		
   		cell4 = row.insertCell(3);
   		cell4.setAttribute("id", "cell");

   		cell5 = row.insertCell(4);
   		cell5.setAttribute("id", "cell");

   		cell6 = row.insertCell(5);
   		cell6.setAttribute("id", "cell");

         cell1.innerHTML="$"+balance.toString().match(/^\d+(?:\.\d{0,2})?/);
         cell2.innerHTML="$"+ payment.toString().match(/^\d+(?:\.\d{0,2})?/);

         currentInterest=balance*rate;
         cell3.innerHTML="$"+currentInterest.toString().match(/^\d+(?:\.\d{0,2})?/);

         currentPrincipal=payment-currentInterest;
         cell4.innerHTML="$"+currentPrincipal.toString().match(/^\d+(?:\.\d{0,2})?/);

         balance=balance-currentPrincipal;
         cell5.innerHTML="$" + balance.toString().match(/^\d+(?:\.\d{0,2})?/);
         cell6.innerHTML=i;// good
		
   		}

  	}
