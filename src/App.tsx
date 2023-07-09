import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Namelist } from './components/Namelist';
import { Namearraylist } from './components/Namearraylist';
import { Headingg } from './Headingg';
import { Oscar } from './components/Oscar';
import { Buttonfile } from './components/Buttonfile';
import { InputOne } from './components/InputOne';
import { ContainerOne } from './components/ContainerOne';

function App() {
  const names={
    name:'name',
    fname:'fname',
    lname:'lname'

  }
  const arrayofnames=[{
    firstname:'Muhammad',
    lastname:'Idrees'
  },
{
  firstname:'Noor',
  lastname:'Islam'
}]
  return (
    <div className="App">
      <Namelist namelist={names}/>
      
      {/* <Namearraylist arrofname={arrayofnames}/>
      <Headingg name="topi">Noor</Headingg>
      <Oscar><Headingg name="testing">hello</Headingg></Oscar> */}

      {/* ================================= */}
      
      <Buttonfile handleclick={(event ,id)=>{console.log("button  cliked" ,id)}} ></Buttonfile>
      <InputOne input="tek hai bhai"eventhandle={(event)=>console.log("okay",event)}></InputOne>
      <ContainerOne style={{border:'3px solid yellow',color:'red',}} ></ContainerOne>
    </div>
  );
}

export default App;
