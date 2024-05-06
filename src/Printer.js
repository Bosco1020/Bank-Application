export default class Printer {
    constructor() {
    
    }
    
    static printStatement(allTransactions) {
        //console.log(allTransactions.getDate());
        //console.log(allTransactions);
        for (let i = 0; i < allTransactions.length; i++){
            this.printDate(allTransactions[i]);
            this.printAmount(allTransactions[i]);
        }
    }

    static printDate(transaction) {
        console.log(transaction.getDate());
    }

    static printAmount(transaction) {
        console.log(transaction.getAmount());
    }
}