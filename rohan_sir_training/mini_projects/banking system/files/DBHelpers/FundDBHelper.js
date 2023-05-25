class FundDBHelper {
    db = openDatabase('banking', '1.0', 'Banking', 10 * 1024 * 1024);
    constructor() { }

    // call it with every other method because we dont know whether the database has been created or not yet
    createOrUpdateFundTable() {
        this.db.transaction((t) => {
            t.executeSql(`CREATE TABLE IF NOT EXISTS FUNDS (transfer_id unique, sender, sender_name, receiver, receiver_name, amount)`);
        });
    }

    // methods for table management
    insertFundData(data) {
        this.createOrUpdateFundTable();
        this.db.transaction((t) => {
            t.executeSql(`INSERT INTO FUNDS(transfer_id, sender, sender_name, receiver, receiver_name, amount) VALUES(?, ?, ? ,?, ?, ?)`, [data.id, data.from, data.senderName, data.to, data.receiverName, data.amount]);
            t.executeSql(`SELECT * FROM USERS WHERE email=?`, [data.to], (tx, result) => {
                var newBalance = parseInt(result.rows[0].current_fund) + parseInt(data.amount);
                t.executeSql(`UPDATE USERS SET current_fund=? WHERE email=?`, [newBalance, data.to]);
            })
        });
    }

    getFundData(user, callBack) {
        this.createOrUpdateFundTable();
        this.db.transaction((t) => {
            t.executeSql(`SELECT * FROM FUNDS WHERE sender=? OR receiver=?`, [user, user], (tx, result) => {
                callBack(result.rows);
            });
        });
    };
}