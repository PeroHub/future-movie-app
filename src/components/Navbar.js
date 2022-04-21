import React from 'react';
import styles from '../styles/navbar.module.css'
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <>
    <div className={styles.navbar}>
        <div className={styles.navbarSub}>
            <Typography sx={{fontSize: "1.2rem", fontWeight: "bold"}}>FutureTV</Typography>
        </div>
    </div>
   
    </>
  );
}

export default Navbar;
