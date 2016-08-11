function simpleInterest(simple){
    var amount = parseInt(simple.Amount.value);
    var rate = parseInt(simple.Rate.value);
    var months = parseInt(simple.Months.value);
    var interest=(amount*rate*months/100);
    var totalAmount = (amount+interest);

   	simple.totalAmount.value = totalAmount; 
    simple.totalInterest.value = interest;
   
    return;
   
}


function compoundInterest(compound){
     var presentAmount = (compound.presentAmount.value);
     var Rate = (compound.Rate.value)/100;
     var Months = (compound.Months.value);
   
     var futureAmount = presentAmount * Math.pow((1+Rate),Months);
     var totalInterest = futureAmount - presentAmount;
     futureAmount = Math.round(futureAmount*100)/100;
     totalInterest  = Math.round(totalInterest*100)/100;
   
     compound.futureAmount.value = futureAmount;
     compound.totalInterest.value = totalInterest;
   
     return;
}