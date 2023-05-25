class UserDBHelper {
    db = openDatabase('banking', '1.0', 'Banking', 10 * 1024 * 1024);

    constructor() { }

    createOrUpdateUserTable() {
        this.db.transaction((t) => {
            t.executeSql(`CREATE TABLE IF NOT EXISTS USERS (email unique, name, current_fund)`);
        });
    }

    getUserData(email, callBack) {
        this.createOrUpdateUserTable();
        this.db.transaction((t) => {
            t.executeSql(`SELECT * FROM USERS WHERE email=?`, [email], (tx, result) => {
                callBack(result.rows[0]);
            });
        });
    }

    insertUserData(data) {
        this.createOrUpdateUserTable();
        this.db.transaction((t) => {
            t.executeSql(`INSERT INTO USERS(email, name, current_fund) VALUES(? ,?, ?)`, [data.email, data.name, data.currentFund]);
        });
    }

    updateUserFund(email, currentFund, callBack) {
        this.createOrUpdateUserTable();
        this.db.transaction((t) => {
            t.executeSql(`UPDATE USERS SET current_fund=? WHERE email=?`, [currentFund, email], (tx, result)=> {
                callBack(true);
            });
        });
    }

    getAllUser(callBack) {
        this.db.transaction((t) => {
            t.executeSql(`SELECT email, name FROM USERS`, [], (tx, result) => {
                callBack(result.rows);
            });
        });
    }

}