import React from "react";
import data from '../Components/Data'
import styles from '../App.module.css'
import useHistory, { Link } from 'react-router-dom'
import Video from '../Images/m2-res_1080p.mp4'
const Home = () => {
    const navigate = useNavigate();
return(
    
    <><div className={styles.container}>

        <section className={styles.topPage}>
            <video className={styles.backgroundVideo} autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
            <div className={styles.overlay}>
                <h1>Make Room for a better Doge</h1>
                <button type="button"
                >
               Shopping
                </button>
            </div>
        </section>
    </div>
    </>
)
}

export default Home