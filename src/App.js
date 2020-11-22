import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value,setValue]=useState({});
  useEffect(()=>{
    fetch(`/.netlify/functions/hello?name=from New React App`)
    .then(res=>res.json())
      .then(obj => setValue(obj))
  },[])
  return (
    <div>
    <h3>{value.message}</h3>
    </div>
  );
}

export default App;
