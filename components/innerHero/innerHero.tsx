import React from "react";
import styles from './innerHero.module.scss'


export default function InnerHero({innerhero}: any ){
    console.log('innerhero:', innerhero)
    return (
       <div className={`${styles.innerHero}`}>
           <div className={`container`}>
               <div className={`row align-items-center`}>
                   <div className={`col-md-6`}>
                       <h2>{innerhero.title}</h2>
                   </div>
               </div>
           </div>
       </div>
    )
}