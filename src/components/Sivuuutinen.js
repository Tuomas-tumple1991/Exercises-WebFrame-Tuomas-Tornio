import React from 'react'
import styles from './Sivuuutinen.module.css';


export default function Sivuuutinen(props) {
    return (
        <div className={ styles.paikka }>
            <div className={ styles.tausta3 }></div>
            <div className={ styles.container7 }></div>
            
         
        <span className= {styles.sivotso} >{props.data.topic} </span>
        <div className={ styles.tausta4 }></div>
        <span className= {styles.sivteksti} >{ props.data.body} </span>
        
        <span className= {styles.sivotso} >{props.data.topic1}: </span>
        <div className={ styles.tausta6 }></div>
        <span className= {styles.sivteksti} >{ props.data.body1} </span>
        
        <span className= {styles.sivotso} >{props.data.topic2}: </span>
        <div className={ styles.tausta6 }></div>
        <span className= {styles.sivteksti} >{ props.data.body2} </span>

        <span className= {styles.sivotso} >{props.data.topic3}: </span>
        <div className={ styles.tausta6 }></div>
        <span className= {styles.sivteksti} >{ props.data.body3} </span>
        
       
        
       
        
        

        </div>
    )
}
