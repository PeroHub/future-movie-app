import styles from '../styles/movie.module.css'
import { Skeleton, SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'

function MovieCategory({person, loader}) {
console.log(person[0]?.Title)
    

  return (
        <>
        <div className={styles.movie}>
        {loader ? <Box padding='6' boxShadow='lg' bg='white'>
          <SkeletonCircle size='10' />
          <SkeletonText mt='4' noOfLines={4} spacing='4' />
        </Box> : <><p>{person[0]?.Title}</p>
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
        </>}
            
        </div>

       </>
  );
}

export default MovieCategory;