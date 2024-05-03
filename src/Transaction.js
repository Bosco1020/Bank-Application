export default class Transaction {

    #fundsBefore;
    #amount;

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
}