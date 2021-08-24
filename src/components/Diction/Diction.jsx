import React, { useState, useEffect } from "react";
import axios from 'axios';
import './diction.scss'
import Header from "./Header/Header";
import Def from "./Def/Def";
const Diction = () => {
    const [meanings,setMeanings] = useState([]);
    const [word,setWord] = useState("");
    const [category,setCategory] = useState("en");

    const dictionaryapi =async()=>{
        try{
            const data = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
            )
            
            setMeanings(data.data);
        }catch(e){
            console.log(e);
        }
    }
    

    useEffect(() => {
        dictionaryapi();
        
    }, [word,category]);

    return (
        <div className ="containerrr">
          <div className="contt" >
           
            <Header category={category} setCategory={setCategory}word={word} setWord={setWord}/>
       
          </div>
          <div className="contt2" >
          {meanings && <Def word={word} meanings={meanings}category={category}/>}
          </div>
        </div>
    );
}

export default Diction;
