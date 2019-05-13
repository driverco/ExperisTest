var express = require('express');
const soap = require('soap');

var router = express.Router();

const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

router.get('/:func/:int1/:int2', function (req, res) {
    var funct = req.params.func;
    var int1 = req.params.int1;
    var int2 = req.params.int2;
    console.log("func = "+funct);
    console.log("int1 = "+int1);
    console.log("int2 = "+int2);
    if (!Number.isInteger(Number.parseInt(int1))){
        console.log("el primer parametro debe ser entero");
        return res.json({error:"el primer parametro debe ser entero"});
        
    }else{
        int1 = Number.parseInt(int1)
    }
    if (!Number.isInteger(Number.parseInt(int2))){
        console.log("error de parametro");
        console.log("el segundo parametro debe ser entero");
        return res.json({error:"el segundo parametro debe ser entero"});
    }else{
        int2 = Number.parseInt(int2)
    }

    var args = {
        intA: int1,
        intB: int2
    };
    soap.createClient(url, function (err, client) {
        if(funct==="add"){
            client.Add(args, function (err, result) {
                console.log(result);
                return res.json(result);
            });
        }else if (funct === "subtract"){
            client.Subtract(args, function (err, result) {
                console.log(result);
                return res.json(result);
            });
        }else if (funct === "divide"){
            if (int2 === 0){
                console.log("error, no se puede dividir por cero");
                return res.json({error:"no se puede dividir por cero"});
            }else{
                client.Divide(args, function (err, result) {
                    console.log(result);
                    return res.json(result);
                });
            }
        }else if (funct === "multiply"){
            client.Multiply(args, function (err, result) {
                console.log(result);
                return res.json(result);
            });
        }else{
            return res.json( {error:"funcion no reconocida"});
        }
    });

});
module.exports = router;

