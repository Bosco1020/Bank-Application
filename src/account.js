export default class Account {
    #name;
    #funds = 0;

    deposit(value) {
        this.#funds += value;
    }

    setName(newName) { this.#name = newName; }

    getName() { return this.#name; }

    getFunds() { return this.#funds; }
}