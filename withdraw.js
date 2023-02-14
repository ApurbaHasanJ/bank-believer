document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('total-withdraw');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('total-withdraw', newWithdrawTotal);

    // Balance step
    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newWithdrawBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    setTextElementValueById('total-balance',newWithdrawBalanceTotal);

    // console.log('withdraw')
})