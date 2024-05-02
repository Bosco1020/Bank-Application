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
    });

});
    