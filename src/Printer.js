export default class Printer {
    constructor() {
    
    }
    
    static printStatement(allTransactions) {
        //console.log(allTransactions.getDate());
        console.log(allTransactions);
        for (let i = 0; i < allTransactions.length; i++){
            console.log(allTransactions[i].getDate());
        }
    }
}