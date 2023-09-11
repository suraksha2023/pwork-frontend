import React from "react";
import styles from './partnerSection.module.scss'


export default function PartnerSection() {

    return (
        <div>
            <div className={`${styles.partners}`}>
                <div className={`container`}>
                  <div className={`${styles.partnerTitle}`}>
                      <h2>Alliance and Partners</h2>
                  </div>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col`}>
                            <img src={`../images/c-1.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`../images/c-2.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`../images/c-3.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`../images/c-4.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`../images/c-5.png`} />
                        </div>
                        <div className={`col`}>
                            <img src={`../images/c-6.png`} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}