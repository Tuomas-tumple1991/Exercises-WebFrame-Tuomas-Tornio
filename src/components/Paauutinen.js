import React from 'react'

import styles from './Paauutinen.module.css';

export default function Paauutinen(props) {
    return (
        <div className={styles.Paatyyli}>
            <div className={styles.tausta2}></div>
            <div className={styles.container7}></div>
        
        <span className= {styles.Otso} >{props.data.topic} </span>
        <img src="/Koronakuva.png"alt=""/>
        <span className= {styles.Teksti2} >TURKULEHTI SEURAA:: </span>
        <span className= {styles.Teksti} >{ props.data.body} </span>
        
        

        </div>
    )
}