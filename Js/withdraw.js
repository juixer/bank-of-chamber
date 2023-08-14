document.getElementById('btn_withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw_field');
    const withdrawString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawString);
    withdrawField.value = '';  
    
    if(isNaN(withdrawValue)){
        alert("Please Enter The Correct Amount!!")
        return;
    }

    const withdrawSpan = document.getElementById('withdraw_span');
    const totalWithdrawString = withdrawSpan.innerText;
    const totalWithdrawValue = parseFloat(totalWithdrawString);

    


    const balanceSpan = document.getElementById('balance_span');
    const balanceString = balanceSpan.innerText;
    const balanceValue = parseFloat(balanceString);

    if(withdrawValue > balanceValue){
        alert("You Can't Withdraw That Amount of Money!!")
        return;
    }
    const totalWithdraw = withdrawValue + totalWithdrawValue;
    withdrawSpan.innerText = totalWithdraw;
    const balance = balanceValue - withdrawValue;
    balanceSpan.innerText = balance;

    alert("Your Balance Withdraw Successfully!!")
})


document.getElementById('withdraw_field').addEventListener('keyup', function(event){
    if(event.key === "Enter"){

        const withdrawField = document.getElementById('withdraw_field');
    const withdrawString = withdrawField.value;
    const withdrawValue = parseFloat(withdrawString);
    withdrawField.value = '';  
    
    if(isNaN(withdrawValue)){
        alert("Please Enter The Correct Amount!!")
        return;
    }

    const withdrawSpan = document.getElementById('withdraw_span');
    const totalWithdrawString = withdrawSpan.innerText;
    const totalWithdrawValue = parseFloat(totalWithdrawString);

    


    const balanceSpan = document.getElementById('balance_span');
    const balanceString = balanceSpan.innerText;
    const balanceValue = parseFloat(balanceString);

    if(withdrawValue > balanceValue){
        alert("You Can't Withdraw That Amount of Money!!")
        return;
    }
    const totalWithdraw = withdrawValue + totalWithdrawValue;
    withdrawSpan.innerText = totalWithdraw;
    const balance = balanceValue - withdrawValue;
    balanceSpan.innerText = balance;

    alert("Your Balance Withdraw Successfully!!")

    }
})