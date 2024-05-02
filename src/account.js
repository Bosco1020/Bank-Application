export default class Account {
    #name;

    setName(newName) { this.#name = newName; }

    getName() { return this.#name; }
}