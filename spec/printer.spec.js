import Printer from "../src/Printer.js";

let testDate1, testDate2, testDate3;
let testAmount1, testAmount2, testAmount3;
let testTransaction1, testTransaction2, testTransaction3;
let testFunds1, testFunds2, testFunds3;

describe("Printer Tests:", () => {

    beforeEach(() => {
            testDate1 = new Date("2009-04-01");
            testDate3 = new Date("1009-11-17");
            testDate2 = new Date("1899-08-21");
            testAmount1 = 500;
            testAmount2 = 5000;
            testAmount3 = -1000;
            testFunds1 = 10000;
            testFunds2 = 3008;
            testFunds3 = 250;
            testTransaction1 = jasmine.createSpyObj("fake", { getDate: testDate1 });
            testTransaction2 = jasmine.createSpyObj("fake", { getAmount: testAmount1 });
            testTransaction3 = jasmine.createSpyObj("fake", { getFundsBefore: testFunds1 }, { getAmount: () => testAmount2 });
    });

    afterEach(() => {
        testDate1 = undefined;
        testDate2 = undefined;
        testDate3 = undefined;
        testAmount1 = undefined;
        testAmount2 = undefined;
        testAmount3 = undefined;
        testFunds1 = undefined;
        testFunds2 = undefined;
        testFunds3 = undefined;
        testTransaction1 = undefined;
        testTransaction2 = undefined;
    });

    describe("User Story 10 Tests:", () => {
        it("Test1: Printer should print to the console the date on a Transaction", () => {
            
            Printer.printDate(testTransaction1);

            expect(testTransaction1.getDate).toHaveBeenCalled();
        });

        it("Test2: Printer should print to the console the amount on a Transaction", () => {

            Printer.printAmount(testTransaction2);

            expect(testTransaction2.getAmount).toHaveBeenCalled();
        });

        it("Test2: Printer should print to the console the total amount of funds in the account after the Transaction", () => {

            Printer.printFunds(testTransaction3);

            expect(testTransaction3.getFundsBefore).toHaveBeenCalled();
        });
    });
});