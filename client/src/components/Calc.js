import React, { Component } from 'react';
import { Input, Row, Col } from 'reactstrap';
class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            result: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.operar = this.operar.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.divide = this.divide.bind(this);
        this.multiply = this.multiply.bind(this);


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
                        <button className="btn btn-primary" onClick={() => this.operar("add", this.state.num1, this.state.num2)}>+ Sumar</button>
                    </Col>
                    <Col>
                        <button className="btn btn-primary" onClick={() => this.operar("subtract", this.state.num1, this.state.num2)}>- Restar</button>
                    </Col>
                    <Col>
                        <button className="btn btn-primary" onClick={() => this.operar("multiply", this.state.num1, this.state.num2)}>* Multiplicar</button>
                    </Col>
                    <Col>
                        <button className="btn btn-primary" onClick={() => this.operar("divide", this.state.num1, this.state.num2)}>/ Dividir</button>
                    </Col>
                </Row><br />
                <Row >
                    <Col><label htmlFor="num2">Resultado: </label></Col>
                    <Col>
                        {this.state.result}
                    </Col>
                </Row><br /><br /><br />


            </div>
        )
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    operar(operac, num1param, num2param){
        if(this.state.num1==="") {
            this.setState({result:"el primer número es obligatorio"});
            return "";
        }
        if(this.state.num2==="") {
            this.setState({result:"el segundo número es obligatorio"});
            return "";
        }
        if(operac==="add") this.add(num1param, num2param);
        if(operac==="subtract") this.subtract(num1param, num2param);
        if(operac==="divide") this.divide(num1param, num2param);
        if(operac==="multiply") this.multiply(num1param, num2param);

    }
    add(num1param, num2param) {
        fetch('/api/calc/add/' + num1param + "/" + num2param)
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    this.setState({ result: res.error });
                } else {
                    this.setState({ result: res.AddResult });
                }
            });
    }
    subtract(num1param, num2param) {
        fetch('/api/calc/subtract/' + num1param + "/" + num2param)
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    this.setState({ result: res.error });
                } else {
                    this.setState({ result: res.SubtractResult });
                }
            });
    }
    divide(num1param, num2param) {
        fetch('/api/calc/divide/' + num1param + "/" + num2param)
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    this.setState({ result: res.error });
                } else {
                    this.setState({ result: res.DivideResult });
                }
            });
    }
    multiply(num1param, num2param) {
        fetch('/api/calc/multiply/' + num1param + "/" + num2param)
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    this.setState({ result: res.error });
                } else {
                    this.setState({ result: res.MultiplyResult });
                }

            });
    }
}
export default Calc;