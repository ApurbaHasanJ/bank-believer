




document.getElementById('deposit-btn').addEventListener('click', function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('total-deposit');
    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // element.innerText = newDepositTotal;
    setTextElementValueById('total-deposit', newDepositTotal);
    // console.log(newDepositAmount, previousDepositTotal)

    // Balance Step
    const previousBalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('total-balance', newBalanceTotal);

})