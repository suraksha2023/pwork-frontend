        import React from "react";
import styles from './partnerSection.module.scss'


export default function PartnerSection({partnersection}: any) {
   console.log('partnersection:', partnersection)
    return (
        <div>
            <div className={`${styles.partners}`}>
                <div className={`container`}>
                  <div className={`${styles.partnerTitle}`}>
                      <h2>{partnersection.title}</h2>
                  </div>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col`}>
                            <img src={partnersection.images[0].image} />
                        </div>
                        <div className={`col`}>
                            <img src={partnersection.images[1].image} />
                        </div>
                        <div className={`col`}>
                            <img src={partnersection.images[2].image} />
                        </div>
                        <div className={`col`}>
                            <img src={partnersection.images[3].image} />
                        </div>
                        <div className={`col`}>
                            <img src={partnersection.images[4].image} />
                        </div>
                        <div className={`col`}>
                            <img src={partnersection.images[5].image} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}