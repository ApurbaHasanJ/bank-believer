// Deposit and withdraw section
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const totalDepositElement = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDepositElement.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString)
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid amount');
        return;
    }

    const currentDepositTotal = previousTotalDeposit + newDepositAmount

    totalDepositElement.innerText = currentDepositTotal;
   


    // balance step
    const balanceTotalElement = document.getElementById('total-balance');
    PreviousBalanceTotalString = balanceTotalElement.innerText;
    PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);
    const currentBalanceTotal = PreviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal
});


// withdraw step + balance
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawFieldString = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawFieldString.value);

    withdrawFieldString.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid amount');
        return;
    }

    const withdrawString = document.getElementById('total-withdraw');
    const withdrawBalance = parseFloat(withdrawString.innerText);
    
    const totalBalanceString = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceString.innerText);

    if(newWithdrawAmount > totalBalance){
        alert('Insufficient funds in your account');
        return ;
        
    }
    

    const totalWithdrawBalance = newWithdrawAmount + withdrawBalance;
    withdrawString.innerText = totalWithdrawBalance;


    const currentBalanceTotal = totalBalance - totalWithdrawBalance;
    totalBalanceString.innerText = currentBalanceTotal;
    
});

// Log out step

document.getElementById('log-out').addEventListener('click', function(){
    window.location.href = 'index.html';
})