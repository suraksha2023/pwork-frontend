import React from "react";
import styles from './sectorSection.module.scss'
export default function SectorSection() {
    return (
        <div>
            <div className={`${styles.sectorSection}`}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-start`}>
                        <div className={`col-md-6 text-center`}>
                            <h2>Leading cabling and infrastructure specialists</h2>
                            <p>As a collection of skilled and experienced construction and engineering professionals from a variety of fields ranging from industrial plants to housing, Engineering & Construction Group utilizes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.sectorCard}`}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-start`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={`../../images/sec-1.png`} /> </div>
                                <div className={`${styles.content}`}><h4>Hospitality</h4></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={`../../images/sec-2.png`} /> </div>
                                <div className={`${styles.content}`}><h4>Hospitality</h4></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={`../../images/sec-3.png`} /> </div>
                                <div className={`${styles.content}`}><h4>Hospitality</h4></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={`../../images/sec-4.png`} /> </div>
                                <div className={`${styles.content}`}><h4>Hospitality</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}