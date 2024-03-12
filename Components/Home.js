import React from "react";
import styles from '../App.module.css'
import Video from '../Images/m2-res_1080p.mp4'
import Cards from "./Cards";
import Data from "./Data";
import { Link } from "react-router-dom";
const Home = () => {
 return(
     <><div className={styles.container}>

         <section className={styles.topPage} id = "hello">
             <video className={styles.backgroundVideo} autoPlay loop muted>
                 <source src={Video} type="video/mp4" />
             </video>
             <div className= {styles.overlay}>
             <h1>Make Room for a better Doge</h1>
             <Link to = "/shopping">
             <button>Shop </button>
             </Link>
             </div>
         </section>
     </div>
         </>
 )
}

export default Home;