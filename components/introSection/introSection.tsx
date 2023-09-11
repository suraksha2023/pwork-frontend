import React from "react";
import styles from './introSection.module.scss'


export default function IntroSection() {

    return (
        <div className={`container`}>
            <div className={`${styles.introSection}`}>
                <div className={`row justify-content-center align-items-center px-0`}>
                    <div className={`col-md-6 text-center`}>
                        <h1>Reliable Network Cabling Services for Growing Businesses and Large Enterprises</h1>
                    </div>
                </div>
                <div className={`${styles.introBlock}`}>
                    <div className={`row`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={`../../images/pro-1.png`} />
                            </div>
                            <h4>Security</h4>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={`../../images/pro-2.png`} />
                            </div>
                            <h4>Networking</h4>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={`../../images/pro-3.png`} />
                            </div>
                            <h4>Storage</h4>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={`../../images/pro-4.png`} />
                            </div>
                            <h4>AV</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}