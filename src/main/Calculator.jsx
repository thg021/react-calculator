import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue:'0',
    clearDisplay: false, 
    operation: null, 
    values: [0, 0], 
    current: 0
}

export default class Calculator extends Component{

    //Manipulando o state com operador spread. 
    state = {...initialState }
   //as funcoes abaixos irão garantir que o this esteja correto. apontado para Calculator. 
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }
    clearMemory(){
        console.log('limpar');
        this.setState({...initialState})
    }

    setOperation(operation){
        const displayValue = '0'
        const current = 1
        
        if(operation === '='){
            const values = this.state.values
            const operationSelect = this.state.operation
            const result = `${values[0]}${operationSelect}${values[1]}` 
            console.log(result)
            return
        }
       
        this.setState({
            current, displayValue, operation
        })
    }

    addDigit(n){
        console.log(n)
        //validação para evitar que o usuarios adicione dois '.'
        if (n === '.' && this.state.displayValue.includes('.')){
            return 
        }
        
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values}) 
           
            
        }

    }

    render(){
     
        return(          
                <div className="calculator">
                    <Display value={this.state.displayValue} />
                    <Button label="AC" click={this.clearMemory} triple />
                    <Button label="/" click={this.setOperation} operation/>
                    <Button label="8" click={this.addDigit}/>
                    <Button label="7" click={this.addDigit}/>
                    <Button label="9" click={this.addDigit}/>
                    <Button label="*" click={this.setOperation} operation/>
                    <Button label="4" click={this.addDigit}/>
                    <Button label="5" click={this.addDigit}/>
                    <Button label="6" click={this.addDigit}/>
                    <Button label="-" click={this.setOperation} operation/>
                    <Button label="1" click={this.addDigit}/>
                    <Button label="2" click={this.addDigit}/>
                    <Button label="3" click={this.addDigit}/>
                    <Button label="+" click={this.setOperation} operation/>
                    <Button label="0" click={this.addDigit} double/>
                    <Button label="." click={this.addDigit} />
                    <Button label="=" click={this.setOperation} operation/>

                </div>        
        )
    }
}