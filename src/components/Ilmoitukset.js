import React from 'react'
import styles from './Ilmoitukset.module.css';
export default function Ilmoitukset(props) {
    return (
        <div className={ styles.container }>
          <span className={styles.header}>{ props.data.topic}:</span>
          <span className={styles.header}>{ props.data.body}</span>
          
          
          

        </div>
    )
}
