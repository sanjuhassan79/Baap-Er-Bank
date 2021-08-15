//handle deposit button event

document.getElementById('Depsit-button').addEventListener('click', () => {

    // console.log('deposit button clicked');
    const depositInput = document.getElementById('deposit_input');
    const newdepositText = depositInput.value;
    console.log(newdepositText);
    const newdepositAmount = parseFloat(newdepositText)

    const depositTotal = document.getElementById('deposit-total');
    console.log(depositTotal.innerText);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);


    const newDepositTotal = previousDepositAmount + newdepositAmount;
    depositTotal.innerText = newDepositTotal;


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    console.log(balanceTotal);
    const balanceTotalText = balanceTotal.innerText;



    const previousBalanceTotal = parseFloat(balanceTotalText)

    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;




    depositInput.value = '';

});

//handle Withdraw-button event

document.getElementById('Withdraw-button').addEventListener('click', () => {

    const WithdrawInput = document.getElementById('Withdraw_input');
    const WithdrawInputText = WithdrawInput.value;

    const newWithdrawAmount = parseFloat(WithdrawInputText)


    const WithdrawTotal = document.getElementById('Withdraw-total');
    const previousWithdrawText = WithdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    WithdrawTotal.innerText = newWithdrawTotal;


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;
    WithdrawInput.value = '';


});