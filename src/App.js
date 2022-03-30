import React from 'react';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Search from './components/Search';
import MovieCategory from './components/MovieCategory';
import axios from "axios"
function App() {

  const [person,setPerson] =useState([])

  const [inputValue, setInputValue] = useState(null);
  const [inputSearchValue, setInputSearchValue] = useState([]);
  const [loader, setLoader] = useState(true)
  
  
  
  useEffect(()=>{
    axios.get(`http://www.omdbapi.com/?s=Batman&page=2&apikey=42062ec0`)
    .then(res => {
     const value  = res.data["Search"]
     localStorage.setItem("movie", JSON.stringify(value))
     
     const saved = localStorage.getItem("movie");
     const initialValue = JSON.parse(saved)
     setPerson(initialValue)
     
     setLoader(false)

      }).catch((error)=> {
      console.log(error);
      setLoader(false)
    })
  },[])


  async function search(searchTerm) {
    axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=42062ec0`)
          .then(res => {
            

            // const found = res.data.find(item => {

            // });
            if ([res.data].indexOf(searchTerm) > -1) {
             console.log("true")
             setInputSearchValue(res.data)
          } else {
              console.log("false")
          }
            
        })
  }


 
  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value)
    search(event)
  };

 
  
 
  return (

    <>
     <div>
      <Navbar />
      <Header />
      <Search search={search} onChangeHandler={onChangeHandler} inputSearchValue={inputSearchValue} />
      <MovieCategory person={person} loader={loader}  />
    </div>
    </>
  );
}

export default App;
