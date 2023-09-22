import React from "react";
import styles from './sectorSection.module.scss'
export default function SectorSection({sectorsection}: any) {
    console.log('sectorsection:', sectorsection)
    return (
        <div>
            <div className={`${styles.sectorSection}`}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-start`}>
                        <div className={`col-md-6 text-center`}>
                            <h2>{sectorsection.title}</h2>
                            <p>{sectorsection.paragraph }</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.sectorCard}`}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-start`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={sectorsection.images[0].image} /> </div>
                                <div className={`${styles.content}`}><h4>{sectorsection.images[0].title}</h4></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={sectorsection.images[1].image} /> </div>
                                <div className={`${styles.content}`}><h4>{sectorsection.images[1].title}</h4></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={sectorsection.images[2].image} /> </div>
                                <div className={`${styles.content}`}><h4>{sectorsection.images[2].title}</h4></div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.card}`}>
                                <div className={`${styles.image}`}><img src={sectorsection.images[3].image} /> </div>
                                <div className={`${styles.content}`}><h4>{sectorsection.images[3].title}</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}