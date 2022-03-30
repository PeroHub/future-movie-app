import React from 'react';
import styles from '../styles/header.module.css'
import background from '../assets/images/moviebackground.svg'


function Header() {

    const sectionStyle = {
        backgroundImage: `url(${background})`, 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        
      };

  return (
    <>
       <div className={styles.header} style={sectionStyle}>
      
        <div className={styles.headerText}>
            <p className={styles.headerpara}>Watch something incredible.</p>
        </div>
       </div>
       </>
  );
}

export default Header;
