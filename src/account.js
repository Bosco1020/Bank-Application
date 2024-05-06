import Transaction from "./Transaction.js";

export default class Account {
    #name;
    #funds = 0;
    #allTransactions = [];

    deposit(value) {
        if (!this.checkInput(value)) {
            return;
        }
        this.#funds += value;
    }

    withdraw(value) {
        if (!this.checkInput(value)) { return; }
        if (this.getFunds() < value) { return; }
        this.#funds -= value;
    }

    setName(newName) { this.#name = newName; }

    getName() { return this.#name; }

    getFunds() { return this.#funds; }

    setFunds(value) { this.#funds += value; }

    getAllTransactions() {
        return this.#allTransactions;
    }

    // if input < 0, make +'ve for shared maths
    // if input doesn't pass checkInput, then returns nothing
    // Otherwise, calls either withdraw or deposit depending on if +'ve or -'ve
    createTransaction(amount, date) {
        if (amount < 0) { amount = amount * -1;
            if (!this.checkInput(amount) || this.getFunds() < amount) { return; } this.withdraw(amount);
            this.#allTransactions.push(this.buildTransaction(amount * -1, date)) }
        else { if (!this.checkInput(amount)) { return; } this.deposit(amount);
            this.#allTransactions.push(this.buildTransaction(amount, date)); }
    }

    // Build a Transaction Obj. from inputs
    buildTransaction(amount, date) {
        let newTransaction = new Transaction();
        newTransaction.setAmount(amount);
        newTransaction.setDate(date);
        newTransaction.setFundsBefore(this.#funds - amount);
        return newTransaction;
    }

    // Checks if the input is a number & if it's +'ve
    checkInput(input) {
        if (typeof (input) !== 'number') { return false; }
        if (input <= 0) { return false; }
        return true;
    }
}