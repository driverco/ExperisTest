import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap';
const soap = require('soap');
class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result:0
        }
        this.handleChange = this.handleChange.bind(this);
        this.add = this.add.bind(this);


    }

    render() {
        return (
            <div className="About">
                <h1 className="text-center">Calculadora SOAP</h1>
                <h2>Datos de Origen:</h2>
                <p>Esta aplicación consume via Web Services SOAP las operaciones de una calculadora, se utiliza <a href="http://www.dneonline.com/calculator.asmx?WSDL">http://www.dneonline.com/calculator.asmx?WSDL</a></p>
                <h2>Calculadora:</h2>
                <ul>
                    <li>Ingrese los datos a operar</li>
                </ul>
                <Row >
                        <Col><label htmlFor="num1">Primer Número: </label></Col>
                        <Col>
                            <Input type="text" placeholder="numero" name="num1" value={this.state.num1} onChange={this.handleChange} />
                        </Col>
                    </Row><br />
                    <Row >
                        <Col><label htmlFor="num2">Segundo Número: </label></Col>
                        <Col>
                            <Input type="text" placeholder="numero" name="num2" value={this.state.num2} onChange={this.handleChange} />
                        </Col>
                    </Row><br />
                    <Row >
                    <Col>
                    <button className="btn btn-primary" onClick={()=>this.add(this.state.num1,this.state.num2)}>+ Sumar</button>
                    </Col>
                    <Col>
                    <button className="btn btn-primary">- Restar</button>
                    </Col>
                    <Col>
                    <button className="btn btn-primary">* Multiplicar</button>
                    </Col>
                    <Col>
                    <button className="btn btn-primary">/ Dividir</button>
                    </Col>
                    </Row>
               

            </div>
        )
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    add(num1param, num2param) {
        
  var url = 'http://www.dneonline.com/calculator.asmx';
  //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  var args = {name: 'value'};
  soap.createClientAsync(url).then((client) => {
    return client.MyFunctionAsync(args);
  }).then((result) => {
    console.log(result);
  });
    }

}
export default Calc;