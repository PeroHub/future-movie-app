import React from 'react';
import { useEffect, useState } from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Search from './components/Search';
import MovieCategory from './components/MovieCategory';
import Box from '@mui/material/Box';
import axios from "axios";

function App() {

  const [person,setPerson] =useState([])
  const [comedy, setComedy ] = useState([])
  const [episode, setEpisode ] = useState([])

  const [inputValue, setInputValue] = useState(null);
  // const [inputSearchValue, setInputSearchValue] = useState([]);
  const [searchResult, setSearchResult] = useState([])
  const [loader, setLoader] = useState('idle')

  // http://www.omdbapi.com/?s=Batman&page=2&apikey=42062ec0
  
  // useEffect(()=>{
  //   axios.get(`http://www.omdbapi.com/?s=Batman&page=2&apikey=42062ec0`)
  //   .then(res => {
  //    const value  = res.data["Search"]
  //    localStorage.setItem("movie", JSON.stringify(value))
     
  //    const saved = localStorage.getItem("movie");
  //    const initialValue = JSON.parse(saved)
    
     
  //    setLoader(false)

  //     }).catch((error)=> {
  //     console.log(error);
  //     setLoader(false)
  //   })
  // },[])


  useEffect(() => {
    const movie = async () => {
      setLoader('loading')
     try {
      const action  = await axios.get(`http://www.omdbapi.com/?s=Action&page=1&apikey=42062ec0`)
      setPerson(action.data['Search'])
      setLoader('loaded')
      const comedy  = await axios.get(`http://www.omdbapi.com/?s=Comedy&page=1&apikey=42062ec0`)
      setComedy(comedy.data['Search'])
      setLoader('loaded')
      const episode  = await axios.get(`http://www.omdbapi.com/?s=Batman&page=1&apikey=42062ec0`)
      console.log(episode.data['Search'])
      setEpisode(episode.data['Search'])
      setLoader('loaded')
     }catch(err) {
       console.log(err)
       setLoader('error')
     }
    }


    movie()
  }, [])


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
     <Box sx={{background: "#10141F"}}>
      <Navbar />
      <Header />
      <Search search={search} onChangeHandler={onChangeHandler} onClickFuc={onClickFuc} searchResult={searchResult} />
      <MovieCategory person={person} loader={loader} Title={"Action"}  />
      <MovieCategory person={comedy} loader={loader} Title={"Comedy"}  />
      <MovieCategory person={episode} loader={loader} Title={"Episode"}  />
    </Box>
    </>
  );
}

export default App;
