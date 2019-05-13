const db = require ('../database');

class Calc {
    static insert( operation, int1, int2, Response, callback){
        db.query('insert into calc (time, operation, int1, int2, Response) VALUES (current_timestamp, $1,$2,$3,$4)',[operation, int1, int2, Response],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
}
module.exports = Calc;