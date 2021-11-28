


function UserCard(key) {
    this.balance = 100;
    this.transactionLimit = 100;
    this.historyLogs = [];
    if (UserCard.card.length === 3) {
        console.error("Sorry, too much cards");
    }
    if (!(UserCard.card.includes(key))) {
        this.key = key;
        UserCard.card.push(key);
    } else {
        console.error("Card already exist")
    }

    this.getCardOptions = function () {
        return {
            balance: this.balance,
            historyLogs: this.historyLogs,
            key: this.key,
            transactionLimit: this.transactionLimit
        }
    }

    this.putCredits = function (money) {
        this.balance += money;

        this.historyPut("Received credits", money, this.formattedDate())
    }

    this.takeCredits = function (money) {
        if (this.balance - money >= 0 && money <= this.transactionLimit)  {
            this.balance -= money;
            this.historyPut("Withdrawal of credits", money, this.formattedDate())

        } else {
            console.error("You want to take more money than you can or you have a limit");
        }

    }

    this.setTransactionLimit = function (limit) {
        this.historyPut("Transaction limit change", limit, this.formattedDate())
        this.transactionLimit = limit;
    }

    this.transferCredits = function (money, card) {
        let transferMoney = ((money * 0.005) + money)
        if (this.balance  - transferMoney >= 0 && transferMoney <= this.transactionLimit) {
            this.balance -= transferMoney;
            card.putCredits(transferMoney - (money * 0.005));
            this.historyPut("Withdrawal of credits", transferMoney, this.formattedDate())

        } else {
            console.error("You have a problem")
        }

    }

    this.historyPut = function (name, money, date) {
        this.historyLogs.push({operationType: name, credits: money, operationTime: date});
    }

    this.formattedDate =  function (d = new Date) {
        let month = String(d.getMonth() + 1);
        let day = String(d.getDate());
        const year = String(d.getFullYear());

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return `${day}/${month}/${year} ${d.toLocaleTimeString('en-US', { hour12: false })} `;
    }

}


UserCard.card = [];



class UserAccount {
   constructor(name) {
       this.name = name;
       this.cards = [];
       this.numberOfCard = 0;
   }

   addCard() {
        this.numberOfCard += 1;
        this.cards.push(new UserCard(this.numberOfCard))

   }

   getCardByKey (id) {
       return this.cards.find(item => item.key === id)
   }
}

// let user = new UserAccount("Bob");
//
// user.addCard();
// user.addCard();
//
// let card1 = user.getCardByKey(1);
// let card2 = user.getCardByKey(2);
//
// card1.putCredits(500);
// card1.setTransactionLimit(800);
// card1.transferCredits(300, card2);
//
// card2.takeCredits(50);
//
// console.log(card1.getCardOptions());
// console.log(card2.getCardOptions());
