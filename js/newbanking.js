document.getElementById('Depsit-button').addEventListener('click', () => {
    // depositInput
    const depositInput = document.getElementById('deposit_input');
    const depositInputText = depositInput.value;
    const depositInputAmount = parseFloat(depositInputText)

    // deposit-total
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const depositTotalAmount = parseFloat(depositTotalText)


    const newTotalDepositAmount = depositTotalAmount + depositInputAmount;

    depositTotal.innerText = newTotalDepositAmount;

    depositInput.value = '';


    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)

    const balanceTotalNewAmount = balanceTotalAmount + depositInputAmount;
    balanceTotal.innerText = balanceTotalNewAmount;





})

// Withdraw-button
document.getElementById('Withdraw-button').addEventListener('click', () => {

    const WithdrawInput = document.getElementById('Withdraw_input');
    const WithdrawInputText = WithdrawInput.value;
    const WithdrawInputAmount = parseFloat(WithdrawInputText);

    const WithdrawTotal = document.getElementById('Withdraw-total');
    const WithdrawTotalText = WithdrawTotal.innerText;
    const WithdrawTotalAmount = parseFloat(WithdrawTotalText);

    const WithdrawTotalNewAmount = WithdrawTotalAmount + WithdrawInputAmount;
    WithdrawTotal.innerText = WithdrawTotalNewAmount;
    WithdrawInput.value = '';



    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText)


    const newBalanceTotal = balanceTotalAmount - WithdrawInputAmount;

    balanceTotal.innerText = newBalanceTotal;




})