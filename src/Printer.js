export default class Printer {
    constructor() {
    
    }
    //Loops through every transaction in array from recent to oldest
    // checks transaction amount for wether it's a withdrawal or deposit
    static printStatement(allTransactions) {
        console.log("date       || credit  || debit    || balance");
        for (let i = allTransactions.length - 1; i > -1; i--){
            if (allTransactions[i].getAmount() < 0)
            { this.printWithdrawal(allTransactions[i]); }
            else { this.printDeposit(allTransactions[i]); }
        }
    }

    static printDeposit(transaction) {
        console.log(this.printDate(transaction).padEnd(13) +
            this.printAmount(transaction).padEnd(9) + "||          ||" + this.printFunds(transaction));
    }

    static printWithdrawal(transaction) {
        console.log(this.printDate(transaction).padEnd(22) + "||" +
            this.printAmount(transaction).padEnd(10) + "||" + this.printFunds(transaction));
    }

    static printDate(transaction) {
        return transaction.getDate().toLocaleDateString('en-GB') + " ||";
    }

    // toFixed sets number of decimal points
    static printAmount(transaction) {
        let amount = " "; amount += transaction.getAmount().toFixed(2);
        return amount;
    }

    static printFunds(transaction) {
        let funds = " "; funds += (transaction.getFundsBefore() + transaction.getAmount()).toFixed(2);
        return funds;
    }
}