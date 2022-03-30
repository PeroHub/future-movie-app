import React from 'react';
import { useState } from 'react';
import styles from '../styles/search.module.css'

function Search({ onChangeHandler, inputSearchValue}) {
//  console.log(inputSearchValue.Search)
 const movieSearch = [inputSearchValue]
 movieSearch.map(item => {
   console.log(item)
 })
  
  return (
    <>
    <div className={styles.searchCon}>
       <div >
           <div><label  className={styles.block}>Search</label></div>
       <input onChange={onChangeHandler} className={styles.searchInput} />
       
       
       </div>
    </div>
   
    </>
  );
}

export default Search;
