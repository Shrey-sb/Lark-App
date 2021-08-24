import React,{useState} from 'react'
import Keyboard from '../Keyboard/Keyboard'
import Screen from '../Screen/Screen'
import './calculator.scss'
export default function Calculator() {
    const [input,setInput] = useState("");
    const addInput = (char)=> {
        var newInput = "";
        

        if(char ==='+'||char ==='/'||char ==='-'||char ==='*'){
            var tempcheck = [...input];
            var lastvalue = tempcheck[tempcheck.length-1];
            if(lastvalue ==='+'||lastvalue ==='-'||lastvalue ==='*'||lastvalue ==="/"){
                setInput(input);
                return;
            }
        }
      //  console.log(input);
       
    if (input.length === 0) {
      if (isNaN(Number(char))) {
        newInput = [...input];
        newInput += 0 + char;
        setInput(newInput);
        return;
      } else {
        newInput = [...input];
        newInput += char;
        setInput(newInput);
        return;
      }
    }

    

    newInput = input;
    

    newInput += char;
    setInput(newInput);
    }
    const back = () => {
      
        setInput(input.slice(0,-1));
      };
    const clearInput = () => {
        setInput("");
      };
      const calculate = () => {
        //Set Input to the returned eval
        try {
          setInput(evaluate(input));
        } catch (e) {
            setInput("error");
            
          console.log(e);
        }
      };
      function evaluate(fn) {
        return new Function("return " + fn)();
      }
    return (
        <div className="calc"> 
        <div className="calcHeader">Calculator</div>
            <Screen input={input}/>
            <Keyboard calculate={calculate}addInput={addInput}/>
            <div className="buttonss">
            <div onClick={clearInput}className="clearButton1">
        Clear All
      </div>
      <div onClick={back}className="clearButton1">
        Clear One
      </div>
      </div>
        </div>
    )
}
