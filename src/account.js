import Transaction from "./Transaction.js";

export default class Account {
    #name;
    #funds = 0;
    #allTransactions = [];

    deposit(value) {
        if (typeof (value) !== 'number') { return; }
        if (value < 0) { return; }
        this.#funds += value;
        //if(this.checkInput(value)) this.#funds += value;
    }

    deposit(value) {
        if (!this.checkInput(value)) {
            return;
        }
        this.#funds += value;
    }

    withdraw(value) {
        if (!this.checkInput(value)) {
            return;
        }
        
        if (this.getFunds() < value) { return; }
        this.#funds -= value;
    }

    setName(newName) { this.#name = newName; }

    getName() { return this.#name; }

    getFunds() { return this.#funds; }

    getAllTransactions() {
        return this.#allTransactions;
    }

    createTransaction(amount, date) {
        if (!this.checkInput(amount)) { return; }
        if (amount < 0) { amount = amount * -1; this.withdraw(amount) }
        else { this.deposit(amount) }

        this.#allTransactions.push(this.buildTransaction(amount, date));
    }

    buildTransaction(amount, date) {
        let newTransaction = new Transaction();
        newTransaction.setAmount(amount);
        newTransaction.setDate(date);
        newTransaction.setFundsBefore(this.#funds - amount);
        return newTransaction;
    }

    checkInput(input) {
        if (typeof (input) !== 'number') { return false; }
        if (input <= 0) { return false; }
        return true;
    }
}