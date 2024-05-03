export default class Transaction {

    #fundsBefore;

    getFundsBefore() {
        return this.#fundsBefore;
    }

    setFundsBefore(value) {
        this.#fundsBefore = value;
    }
}