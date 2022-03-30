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
  const [searchResult, setSearchResult] = useState([])
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
            

      
            let searchArr = res.data["Search"]
          setSearchResult(searchArr)
        //   let searchArr = res.data["Search"]
        //   function searchStringInArray (searchTerm, searchArr) {
        //     for (var j=0; j<searchArr.length; j++) {
        //         if (searchArr[j].match(searchTerm)) console.log(j);
        //     }
        //     return -1;
        // }
            
        })
  }


 
  const onChangeHandler = (event) => {

    // setInputValue(event.target.value);
    console.log(event.target.value)
    let trimValue = event.target.value.trim()
    setInputValue(trimValue)
    // search(trimValue)
  };

  const onClickFuc = () => {
    search(inputValue)
  }

 
  
 
  return (

    <>
     <div>
      <Navbar />
      <Header />
      <Search search={search} onChangeHandler={onChangeHandler} inputSearchValue={inputSearchValue} onClickFuc={onClickFuc} searchResult={searchResult} />
      <MovieCategory person={person} loader={loader}  />
    </div>
    </>
  );
}

export default App;
