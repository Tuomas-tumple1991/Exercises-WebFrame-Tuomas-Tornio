import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={ styles.headerBackground }>
        <div className={ styles.container }>
        
        
        <div className={styles.brand}>TURKULEHTI</div>


          <div className={styles.container2}> Etusivu</div>
          <div className={styles.container2}>Uutiset</div>
          <div className={styles.container2}>Lehdet</div>
          <div className={styles.container2}>Asiakaspalvelu</div>

          <div className={styles.container4}>Tilaa</div>
          
          <div className={styles.container3}>Kirjaudu</div>

          <div className={styles.container3}>Valikko</div>
           
          </div>
           
          </div>
        
    )
    }