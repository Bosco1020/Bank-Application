import Account from "../src/Account.js";

let testAccount, expected;

describe("Account Tests:", () => {

    beforeEach(() => {
        testAccount = new Account();
    });

    afterEach(() => {
        testAccount = undefined;
        expected = undefined;
    });

    describe("User Story 1 Tests:", () => {
        it("Test1: Users account is an instance of the Account class", () => {
            
            expect(testAccount instanceof (Account)).toBeTrue();
        });

        it("Test2: Users account should contain name of their account", () => {
            const demoName = "demoAccount";

            testAccount.setName(demoName);
            expect(testAccount.getName()).toBe(demoName);
        });
    });

    describe("User Story 2 Tests:", () => {
        it("Test1: Account.getFunds() returns a number", () => {
            
            expect(typeof(testAccount.getFunds()) === 'number').toBeTrue();
        });

        it("Test2: The Accounts funds should be set to 0 by default", () => {
            
            expect(testAccount.getFunds()).toBe(0);
        });
    });

    describe("User Story 3 Tests:", () => {
        it("Test1: Account.deposit() should increase the accounts funds by the deposited amount", () => {
            
            const testAmount = 1000;

            testAccount.deposit(testAmount);
            expect(testAccount.getFunds()).toBe(testAmount);
        });

        it("Test2: deposit method should only accept an integer variable", () => {
            
            const testAmount = "1000";

            testAccount.deposit(testAmount);
            expect(testAccount.getFunds()).toBe(0);
        });

        it("Test3: deposit method should only accept a positive integer variable", () => {
            
            const testAmount = -1000;

            testAccount.deposit(testAmount);
            expect(testAccount.getFunds()).toBe(0);
        });
    });

    describe("User Story 4 Tests:", () => {
        it("Test1: Account.withdraw() should decrease the accounts funds by the withdrawn amount", () => {
            
            const startAmount = 1000;
            const testWithdrawal = 500;
            
            testAccount.deposit(startAmount);
            
            testAccount.withdraw(testWithdrawal);
            expect(testAccount.getFunds()).toBe(startAmount- testWithdrawal);
        });

        it("Test2: withdraw method should only accept an integer variable", () => {
            
            const startAmount = 1000;
            const testWithdrawal = "500";
            testAccount.deposit(startAmount);
            
            testAccount.withdraw(testWithdrawal);

            expect(testAccount.getFunds()).toBe(startAmount);
        });

        it("Test3: withdraw method should only accept a positive integer variable", () => {
            
            const startAmount = 1000;
            const testWithdrawal = -500;
            testAccount.deposit(startAmount);
            
            testAccount.withdraw(testWithdrawal);
            expect(testAccount.getFunds()).toBe(startAmount);
        });
    });

    describe("User Story 5 Tests:", () => {
        it("Test1: Account.withdraw() shouldn't complete if there aren't sufficient funds", () => {
            
            const startAmount = 500;
            const testWithdrawal = 1000;
            
            testAccount.deposit(startAmount);
            
            testAccount.withdraw(testWithdrawal);
            expect(testAccount.getFunds()).toBe(startAmount);
        });
    });

    describe("User Story 8 Tests:", () => {
        it("Test1: createTransaction makes a new transaction and adds it to the account", () => {
            const testDate = new Date("2009-04-01");
            const testAmount = 1000;
            testAccount.createTransaction(testAmount, testDate);
            expected = false;
            //check both amount & date are correct
            if (testAccount.getAllTransactions()[0].getAmount() === testAmount
                && testAccount.getAllTransactions()[0].getDate() === testDate) {
                expected = true;
                }

            expect(expected).toBeTrue;
        });

        it("Test2: making a deposit creates a new transaction in the account", () => {
            
            const current = testAccount.getAllTransactions().length;
            
            const testDate = new Date("1980-12-21");
            const testAmount = 1000;
            testAccount.createTransaction(testAmount, testDate);

            expect(testAccount.getAllTransactions().length).toBe(current + 1);
        });

         it("Test3: making a deposit by making a Transaction should increase the accounts funds by the deposited amount", () => {
            const current = testAccount.getFunds();

            const testDate = new Date("1980-12-21");
            const testAmount = 1000;
            testAccount.createTransaction(testAmount, testDate);
            
            expect(testAccount.getFunds()).toBe(current + testAmount);
        });

    });
});
    