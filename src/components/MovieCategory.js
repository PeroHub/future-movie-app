import styles from '../styles/movie.module.css'
import CircularProgress from '@mui/material/CircularProgress';

function MovieCategory({person, Title , loader}) {

    let sam
    if(loader === 'error'){
      sam = <h2 style={{color: "red"}}>Bad network!! try again</h2>
    }else {
      if(loader === 'idle'){
        sam = <h2>Fetching movie... </h2>
      }else if(loader === 'loading'){
        sam = <CircularProgress />
      }else if(loader === 'loaded'){
        sam = <>
                <p style={{color: "#fff", fontSize: "2rem"}}>{Title}</p>
                  <div className={styles.categoryCon}>
                    
                    {person.map((item) => (
                      
                        <div key={item.id}  className={styles.categoryBox}>
                          <img src={item.Poster} style={{height: "inherit", width: "inherit"}} alt={`${item.Title}`} />
                        <div >
                        
                          <p style={{color: "#fff"}}>{item.Year}</p>
                          <p style={{color: "#fff", display: "flex", flexWrap: "wrap"}}>{item.Title}</p>
                        </div>
                        </div>
                    ))}
                    
                  </div>
              </>
      }
    }
    
    

  return (
        <>
       
        <div className={styles.movie}>
        {sam}
          
          
        </div>

       </>
  );
}

export default MovieCategory;