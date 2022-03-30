import styles from '../styles/movie.module.css'

function MovieCategory({person}) {
// console.log(person[0])
    

  return (
        <>
        <div className={styles.movie}>
         
            <p>Movie category name</p>
            <div className={styles.categoryCon}>
              
              {person.map((item) => (
                
                   <div key={item.id}  className={styles.categoryBox}>
                    <div className={styles.box}> <p style={{color: "#fff"}}>{item.Title}</p></div>
                  </div>
               
                
              ))}
                {/* <div className={styles.categoryBox}>

                </div>
                <div className={styles.categoryBox}>

                </div>
                <div className={styles.categoryBox}>

                </div>
                <div className={styles.categoryBox}>

                </div>
                <div className={styles.categoryBox}>

                </div>
                <div className={styles.categoryBox}>

                </div>
                <div className={styles.categoryBox}>

                </div> */}
            </div>
        </div>

       </>
  );
}

export default MovieCategory;