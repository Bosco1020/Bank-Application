import Printer from "../src/Printer.js";

let testDate1, testDate2, testDate3;
let testTransaction1, testTransaction2, testTransaction3;

describe("Printer Tests:", () => {

    beforeEach(() => {
            testDate1 = new Date("2009-04-01");
            testDate3 = new Date("1009-11-17");
            testDate2 = new Date("1899-08-21");
            testTransaction1 = jasmine.createSpyObj("fake", { getDate: testDate1 });
            testTransaction2 = jasmine.createSpyObj("fake2", { getDate: testDate2 });
            testTransaction3 = jasmine.createSpyObj("fake3", { getDate: testDate3 });
    });

    afterEach(() => {
        testDate1 = undefined;
        testDate2 = undefined;
        testDate3 = undefined;
        testTransaction1 = undefined;
        testTransaction2 = undefined;
        testTransaction3 = undefined;
    });

    describe("User Story 10 Tests:", () => {
        it("Test1: The printers printStatement() should print to the console the date on every Transaction in allTransactions[]", () => {
            
            let testAccount = [testTransaction1, testTransaction2, testTransaction3];
            Printer.printStatement(testAccount);

            expect(testTransaction1.getDate && testTransaction2.getDate && testTransaction3.getDate).toHaveBeenCalled();
        });
    });
});