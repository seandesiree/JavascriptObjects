function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }
  
  Account.prototype.deposit = function(amount) {
    this.balance += amount;
    console.log(`Successfully deposited $${amount}. New balance: $${this.balance}`);
  }
  
  Account.prototype.withdraw = function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Successfully withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Insufficient balance. Withdrawal failed.");
    }
  }
  
  Account.prototype.calculateInterest = function(rate, years) {
    let compoundInterest = this.balance * Math.pow(1 + rate, years);
    console.log(`Compound interest after ${years} years: $${compoundInterest.toFixed(2)}`);
  }
  
  let account = new Account(123456789, 1000, "John Doe");
  
  account.deposit(500);
  account.withdraw(200);
  
  account.calculateInterest(0.05, 3);