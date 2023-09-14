import React from "react";
import styles from './blogSection.module.scss'


export default function BlogSection() {

    return (
        <div>
            <div className={`${styles.blogSection}`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <h2>Related Blog</h2>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={`${styles.blogCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={`../../images/infra-1.png`} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h5>06 Dec 2023</h5>
                                    <h3>What is Epabx and How it Works?</h3>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.blogCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={`../../images/infra-2.png`} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h5>06 Dec 2023</h5>
                                    <h3>What is Epabx and How it Works?</h3>
                                    <p>Dear Customers, We at Value Point are celebrating 3 decades of uninterrupted service to you, our amazing customers! In...</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.blogCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={`../../images/infra-3.png`} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h5>06 Dec 2023</h5>
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