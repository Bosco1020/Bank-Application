import Transaction from "../src/Transaction.js";

let testTransaction, expected;

describe("Account Tests:", () => {

    beforeEach(() => {
        testTransaction = new Transaction();
    });

    afterEach(() => {
        testTransaction = undefined;
        expected = undefined;
    });

    describe("User Story 6 Tests:", () => {
        it("Test1: Transactions has a variable for the fundsBefore that can be set", () => {
            
            const testInput = 1000;
            testTransaction.setFundsBefore(testInput);

            expect(testTransaction.getFundsBefore()).toBe(testInput);
        });

        it("Test2: Transactions has a variable for the transactionAmount that can be set", () => {
            
            const testInput = 1009;
            testTransaction.setAmount(testInput);

            expect(testTransaction.getAmount()).toBe(testInput);
        });
    });

    describe("User Story 7 Tests:", () => {
        it("Test1: Transactions has a variable for the date that can be set", () => {
            
            const testDate = new Date("2009-04-01");
            testTransaction.setDate(testDate);

            expect(testTransaction.getDate()).toBe(testDate);
        });
    });
});