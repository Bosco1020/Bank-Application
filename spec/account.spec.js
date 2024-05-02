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
        it("Test1: Account.getFunds() returns a double", () => {
            
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
    });
});
    