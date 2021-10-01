import React from 'react'
import styles from './Kuvat.module.css';


export default function Larry(props) {
return (
    <div className={ styles.kokoilmoitus}>
    <div className={styles.kaikkikuvat}>

    <img src="/Larry.PNG"alt=""/>
    <span className={styles.tekstittopic}>{ props.data.topic}</span>
<span className={styles.tekstitbody}>{ props.data.body}</span> 
<span className={styles.tekstitbody}>{ props.data.body2}</span> 
<span className={styles.tekstitbody}>{ props.data.body3}</span> 
<span className={styles.rating}>{ props.data.body4}</span><span className={styles.ratingstd}>/5</span> 
   

    
    

      
</div>
      </div>
)}