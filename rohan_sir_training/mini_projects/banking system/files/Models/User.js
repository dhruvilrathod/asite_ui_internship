class User {
    name;
    email;
    currentFund;
    fundTransferHistory;

    constructor(name, email, currentFund = 0, fundTransferHistory = []) {
        this.name = name;
        this.email = email;
        this.currentFund = currentFund;
        this.fundTransferHistory = fundTransferHistory
    }
}