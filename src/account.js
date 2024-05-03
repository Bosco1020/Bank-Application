export default class Account {
    #name;
    #funds = 0;

    deposit(value) {
        if (typeof (value) !== 'number') { return; }
        if (value < 0) { return; }
        this.#funds += value;
        //if(this.checkInput(value)) this.#funds += value;
    }

    withdraw(value) {
        if (typeof (value) !== 'number') { return; }
        if (value < 0) { return; }
        if (this.getFunds() < value) { return; }
        this.#funds -= value;
        //if(this.checkInput(value)) this.#funds -= value;
    }

    setName(newName) { this.#name = newName; }

    getName() { return this.#name; }

    getFunds() { return this.#funds; }

    /*checkInput(input) {

        if (typeof (value) !== 'number') { return false; }
        if (value < 0) { return false; }
        //if (value < 0) { return; }

        //if (typeof (input) === 'number') { return true; }
        return true;
        return (typeof (input) === 'number');
    }*/
}