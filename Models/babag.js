var sqlite3 = require('sqlite3').verbose();
var database = "database/babag.db";

module.exports = {
    saveBabag: function (req) {
        return new Promise(function (resolve, reject) {
            try {
                var db = new sqlite3.Database(database);
                var check;
                db.run("CREATE TABLE if not exists babag_jokes (joke TEXT, joke_from TEXT)");
                var stmt = db.prepare("INSERT INTO babag_jokes VALUES (?,?)");
                stmt.run(req.body.joke, req.body.user_type);
                stmt.finalize();
                db.close();
                resolve(true);
            } catch (e) {
                console.log(e)
                resolve(false)
            }
        });
    },
    getBabag: function (offset, size) {
        return new Promise(function (resolve, reject) {
            try {
                var db = new sqlite3.Database(database);
                db.all("SELECT * FROM babag_jokes limit " + offset + "," + size, function (err, row) {
                    resolve(row)
                });
                db.close();
            } catch (e) {
                console.log(e);
                resolve(false)
            }
        });
    }
    ,
}
