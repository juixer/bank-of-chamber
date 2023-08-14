document.getElementById('btn_deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit_field');
    const depositValueString = depositField.value;
    depositField.value = '';
    const depositValue = parseFloat(depositValueString)

    if(isNaN(depositValue)){
        alert("Please Enter The Correct Amount!!")
        return;
    }


    const depositSpan = document.getElementById('deposit_span');
    const totalDepositString = depositSpan.innerText;
    const totalDepositValue = parseFloat(totalDepositString);
   const totalDeposit = totalDepositValue + depositValue;
   depositSpan.innerText = totalDeposit;



   const balanceSpan = document.getElementById('balance_span');
   const balanceString = balanceSpan.innerText
   const balanceValue = parseFloat(balanceString);
   const balance = balanceValue +  depositValue;
    balanceSpan.innerText = balance;
    alert('Your Balance Deposit Successfully!!')
})

document.getElementById('deposit_field').addEventListener('keyup', function(event){
    if(event.key === "Enter"){
        const depositField = document.getElementById('deposit_field');
    const depositValueString = depositField.value;
    depositField.value = '';
    const depositValue = parseFloat(depositValueString)

    if(isNaN(depositValue)){
        alert("Please Enter The Correct Amount!!")
        return;
    }

    const depositSpan = document.getElementById('deposit_span');
    const totalDepositString = depositSpan.innerText;
    const totalDepositValue = parseFloat(totalDepositString);
   const totalDeposit = totalDepositValue + depositValue;
   depositSpan.innerText = totalDeposit;



   const balanceSpan = document.getElementById('balance_span');
   const balanceString = balanceSpan.innerText
   const balanceValue = parseFloat(balanceString);
   const balance = balanceValue +  depositValue;
    balanceSpan.innerText = balance;
    alert('Your Balance Deposit Successfully!!')
    }
})