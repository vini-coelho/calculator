import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component { 

  state = {...initialState};

  clearDisplay = () => {   
    this.setState({...initialState});
  }

  setDigit = n => {

    const clearDisp = (this.state.displayValue === '0')||(this.state.clearDisplay)
    if (n === '.' && !clearDisp && this.state.displayValue.includes('.')){
      return
    }
    const currentValue = clearDisp ? '' : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({displayValue, clearDisplay: false})
    
    if (n !== '.'){
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({values});
    }
  }

  setOperation = operation => {
    if (this.state.current === 0){
      this.setState({clearDisplay: true, operation: operation, current: 1 })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }
      catch (e){
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({displayValue: `${values[0]}`, operation: equals ? null : operation, values, clearDisplay: true})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Display label={this.state.displayValue}/>
        <View style={styles.Buttons}>
          <Button triple onClick={this.clearDisplay} label='AC'></Button>
          <Button onClick={() => this.setOperation('/')} operation label='/'></Button>
          <Button onClick={this.setDigit} label='7'></Button>
          <Button onClick={this.setDigit} label='8'></Button>
          <Button onClick={this.setDigit} label='9'></Button>
          <Button onClick={this.setOperation}operation label='*'></Button>
          <Button onClick={this.setDigit} label='4'></Button>
          <Button onClick={this.setDigit} label='5'></Button>
          <Button onClick={this.setDigit} label='6'></Button>
          <Button onClick={this.setOperation} operation label='-'></Button>
          <Button onClick={this.setDigit} label='1'></Button>
          <Button onClick={this.setDigit} label='2'></Button>
          <Button onClick={this.setDigit} label='3'></Button>
          <Button onClick={this.setOperation} operation label='+'></Button>
          <Button onClick={this.setDigit} double label='0'></Button>
          <Button onClick={this.setDigit} label='.'></Button>
          <Button onClick={this.setOperation} operation label='='></Button>
        </View>
      </View>
      
    )
    
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
