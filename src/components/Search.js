import React from 'react';
// import { useState } from 'react';
import styles from '../styles/search.module.css'

function Search({ onChangeHandler, onClickFuc, searchResult}) {
//  console.log(inputSearchValue.Search)
//  const movieSearch = [inputSearchValue]
//  movieSearch.map(item => {
//    console.log(item)
//    return item
//  })

 console.log(searchResult)
  
  return (
    <>
    <div className={styles.searchCon}>
       <div >
           <div><label  className={styles.block}>Search</label></div>
           
       <div style={{display: "flex"}}>
       <input onChange={onChangeHandler} className={styles.searchInput} />
       {/* <button onClick={onClickFuc}>Search</button> */}
       
       </div>
       {searchResult.map(result => (
         <p>{result?.Title}</p>
       ))}
       
       </div>
    </div>
   
    </>
  );
}

export default Search;
