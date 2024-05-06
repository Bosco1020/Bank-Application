import Account from "./Account.js";
import Printer from "./Printer.js";
import Transaction from "./Transaction.js";


function spacer() {
    console.log("========================");
}

function print(content) {
    console.log(content);
}

let myAccount = new Account();
myAccount.setName("C.B");


// * List of functionality:
// "Create" an account - say that it's made
spacer();
print(" Demo: Account for " + myAccount.getName() + " opened.");
spacer();

//show current funds = 0
print(" Demo: Current Account funds are: £" + myAccount.getFunds() + ".");
spacer();
// make a deposit, show increased funds after
let deposit1 = 1000;
let tDate1 = new Date("2012-01-10");
print(" Demo: Attempt to deposit: £" + deposit1 + ".");
myAccount.createTransaction(deposit1, tDate1);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// make a 2nd deposit, show increased funds after
let deposit2 = 2000;
let tDate2 = new Date("2012-01-13");
print(" Demo: Attempt to deposit: £" + deposit1 + ".");
myAccount.createTransaction(deposit2, tDate2);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// make a withdrawal (<deposit), show funds
let withdraw1 = -500;
let tDate3 = new Date("2012-01-14");
print(" Demo: Attempt to withdraw: £" + withdraw1 + ".");
myAccount.createTransaction(withdraw1, tDate3);
print(" Demo: Withdrawal successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// Print Statement
// print account statement
print(" Demo: Print account statement matching requirement layout:");
Printer.printStatement(myAccount.getAllTransactions());
spacer();

print(" Demo: Further functionality demonstation");
spacer();
//attempt to make withdrawal (>funds), show no change
let withdraw2 = -3000;
let tDate4 = new Date("2012-02-01");
print(" Demo: Attempt to withdraw: £" + withdraw2 + ".");
myAccount.createTransaction(withdraw2, tDate4);
print(" Demo: Withdrawal unsuccessful, not enough funds. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();

// make another deposit
let deposit3 = 1850;
let tDate5 = new Date("2012-02-02");
print(" Demo: Attempt to deposit: £" + deposit3 + ".");
myAccount.createTransaction(deposit3, tDate5);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();

//attempt to make withdrawal (>funds), show no change
let tDate6 = new Date("2012-02-03");
print(" Demo: Attempt to withdraw: £" + withdraw2 + ".");
myAccount.createTransaction(withdraw2, tDate6);
print(" Demo: Withdrawal successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// print account statement
print(" Demo: Print account statement:");
Printer.printStatement(myAccount.getAllTransactions());
spacer();
// ONe more deposit & reprint Statement
let deposit4 = 420;
let tDate7 = new Date("2012-02-11");
print(" Demo: Attempt to deposit: £" + deposit4 + ".");
myAccount.createTransaction(deposit4, tDate7);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
print(" Demo: Print updated account statement:");
Printer.printStatement(myAccount.getAllTransactions());
spacer();