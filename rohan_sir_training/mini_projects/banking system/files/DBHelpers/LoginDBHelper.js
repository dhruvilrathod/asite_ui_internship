class LoginDBHelper {
    db = openDatabase('banking', '1.0', 'Banking', 10 * 1024 * 1024);

    constructor() {
    }

    // call it with every other method because we dont know whether the database has been created or not yet
    createOrUpdateLoginTable() {
        this.db.transaction((t) => {
            t.executeSql(`CREATE TABLE IF NOT EXISTS CREDENTIALS (email unique, password, login_status)`);
        });
    }

    // methods for table management
    insertLoginData(data, callBack) {
        this.createOrUpdateLoginTable();
        this.db.transaction((t) => {
            t.executeSql(`INSERT INTO CREDENTIALS(email, password, login_status) VALUES(? ,?, ?)`, [data.email, data.password, false], (tx, result) => {
                window.location.href= 'login.html';
            });

        });
    }

    updateLoginPassword(email, password) {
        this.createOrUpdateLoginTable();
        this.db.transaction((t) => {
            t.executeSql(`UPDATE CREDENTIALS SET password=? WHERE email=?`, [password, email]);
        });
    }

    updateLoginStatus(email, loginFlag) {
        this.createOrUpdateLoginTable();
        this.db.transaction((t) => {
            t.executeSql(`UPDATE CREDENTIALS SET login_status=? WHERE email=?`, [loginFlag, email], (tx, result) => {
                if(loginFlag) window.location.href = 'index.html';
                else window.location.href = 'login.html';
            });
        });
    }

    getLoginStatus(email, callBack) {
        this.createOrUpdateLoginTable();
        this.db.transaction((t) => {
            t.executeSql(`SELECT login_status FROM CREDENTIALS WHERE email=?`, [email], (tx, result) => {
                callBack(result.rows[0].login_status);
            });
        });
    }

    getLoginData(email, callBack) {
        this.createOrUpdateLoginTable();
        this.db.transaction((t) => {
            t.executeSql(`SELECT * FROM CREDENTIALS WHERE email=?`, [email],(tx, result) => {
                if(result.rows.length > 0) callBack(true);
                else callBack(false);
            });
        });
    }

    getLoginDataVerification(data, callBack) {
        this.createOrUpdateLoginTable();
        this.db.transaction((t) => {
            t.executeSql(`SELECT password FROM CREDENTIALS WHERE email=? AND password=?`, [data.email, data.password], (tx, result) => {
                if(result.rows.length == 1) {
                    this.updateLoginStatus(data.email, true);
                    callBack(true);
                }
                else callBack(false); 
            });
        });
    }

}