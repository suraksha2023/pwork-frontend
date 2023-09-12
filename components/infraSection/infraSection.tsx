import React from "react";
import styles from './infraSection.module.scss'


export default function InfraSection() {

    return (
        <div>
            <div className={`${styles.infraSection}`}>
                <div className={`container`}>
                    <div className={`row align-items-start`}>
                        <div className={`col-md-6`}>
                            <div className={`${styles.infraContent}`}>
                                <h2>Infrastructure Services</h2>
                                <p>Imagine a future where IT infrastructures can monitor themselves, predict and respond to future business needs and protect and heal themselves.</p>
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
                                    <img src={`../../images/infra-1.png`} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h3>What is Epabx and How it Works?</h3>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.infraCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={`../../images/infra-2.png`} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h3>What is Epabx and How it Works?</h3>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.infraCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={`../../images/infra-3.png`} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h3>What is Epabx and How it Works?</h3>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}