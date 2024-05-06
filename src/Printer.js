export default class Printer {
    constructor() {
    
    }
    
    static printStatement(allTransactions) {
        console.log("date       || credit  || debit  || balance");
        for (let i = 0; i < allTransactions.length; i++){
            if (allTransactions[i].getAmount() < 0)
            { this.printWithdrawal(allTransactions[i]); return; }
            else { this.printDeposit(allTransactions[i]); }
        }
    }

    static printDeposit(transaction) {
        console.log(this.printDate(transaction).padEnd(13) + 
        this.printAmount(transaction).padEnd(22) + this.printFunds(transaction))
    }

    static printWithdrawal(transaction) {
        console.log(this.printDate(transaction).padEnd(24) + 
        this.printAmount(transaction).padEnd(11) + this.printFunds(transaction))
    }

    static printDate(transaction) {
        return transaction.getDate().toLocaleDateString('en-GB');
    }

    static printAmount(transaction) {
        let amount = " "; amount += transaction.getAmount();
        return amount;
    }

    static printFunds(transaction) {
        let funds = " "; funds += transaction.getFundsBefore() + transaction.getAmount();
        return funds;
    }
}