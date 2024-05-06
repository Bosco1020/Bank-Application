export default class Transaction {

    #fundsBefore;
    #amount;
    #transactionDate;

    getFundsBefore() {
        return this.#fundsBefore;
    }

    setFundsBefore(value) {
        this.#fundsBefore = value;
    }

    getAmount() {
        return this.#amount;
    }

    setAmount(value) {
        this.#amount = value;
    }

    getDate() {
        return this.#transactionDate;
    }

    setDate(newDate) {
        this.#transactionDate = newDate;
    }
}