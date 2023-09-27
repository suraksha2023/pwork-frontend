import React from "react";
import styles from './breadcrumb.module.scss'

export default function Breadcrumb({breadcrumb}: any) {
    console.log('breadcrumb:', breadcrumb)
    return (
        <div>
            <div className={`${styles.breadcrumb}`}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-12`}>
                            <p>{breadcrumb.text}</p>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}