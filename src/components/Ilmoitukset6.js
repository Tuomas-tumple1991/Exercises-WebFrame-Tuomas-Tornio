import React from 'react'
import styles from './Ilmoitukset.module.css';
export default function Ilmoitukset6(props) {
    return (
        <div className={ styles.container6 }>
              <span className={styles.header}>{ props.data.topic}:</span>
              <span className={styles.header}>{ props.data.body}</span>
          
          

        </div>
    )
}