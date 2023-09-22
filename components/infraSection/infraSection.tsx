import React from "react";
import styles from './infraSection.module.scss'


export default function InfraSection({infrasection}: any) {
  console.log('infrasection:', infrasection)  
    return (
        <div>
            <div className={`${styles.infraSection}`}>
                <div className={`container`}>
                    <div className={`row align-items-start`}>
                        <div className={`col-md-6`}>
                            <div className={`${styles.infraContent}`}>
                                <h2>{infrasection.heading}</h2>
                                <p>{infrasection.paragraph}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={`${styles.infraBottom}`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={`${styles.infraCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={infrasection.infrasec[0].image} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h3>{infrasection.infrasec[0].title}</h3>
                                    <p>{infrasection.infrasec[0].paragraph}</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.infraCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={infrasection.infrasec[1].image} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h3>{infrasection.infrasec[1].title}</h3>
                                    <p>{infrasection.infrasec[1].paragraph}</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.infraCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={infrasection.infrasec[2].image} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h3>{infrasection.infrasec[2].title}</h3>
                                    <p>{infrasection.infrasec[2].paragraph}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}