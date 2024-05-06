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
let tDate1 = new Date("2024-04-21");
print(" Demo: Attempt to deposit: £" + deposit1 + ".");
myAccount.createTransaction(deposit1, tDate1);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// make a withdrawal (<deposit), show funds
let withdraw1 = -500;
let tDate2 = new Date("2024-04-23");
print(" Demo: Attempt to withdraw: £" + withdraw1 + ".");
myAccount.createTransaction(withdraw1, tDate2);
print(" Demo: Withdrawal successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
//attempt to make withdrawal (>funds), show no change
let withdraw2 = -700;
let tDate3 = new Date("2024-04-27");
print(" Demo: Attempt to withdraw: £" + withdraw2 + ".");
myAccount.createTransaction(withdraw2, tDate3);
print(" Demo: Withdrawal unsuccessful, not enough funds. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// make another deposit
let deposit2 = 850;
let tDate4 = new Date("2024-05-01");
print(" Demo: Attempt to deposit: £" + deposit2 + ".");
myAccount.createTransaction(deposit2, tDate4);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// repeat withdrawal earlier that was too large
let tDate5 = new Date("2024-05-02");
print(" Demo: Attempt to withdraw: £" + withdraw2 + ".");
myAccount.createTransaction(withdraw2, tDate5);
print(" Demo: Withdrawal successful. Current Account funds: £" + myAccount.getFunds() + ".");
spacer();
// print account statement
print(" Demo: Print account statement:");
Printer.printStatement(myAccount.getAllTransactions());
spacer();
// ONe more deposit & reprint Statement
let deposit3 = 420;
let tDate6 = new Date("2024-05-04");
print(" Demo: Attempt to deposit: £" + deposit3 + ".");
myAccount.createTransaction(deposit3, tDate6);
print(" Demo: Deposit successful. Current Account funds: £" + myAccount.getFunds() + ".");
print(" Demo: Print updated account statement:");
Printer.printStatement(myAccount.getAllTransactions());
spacer();
