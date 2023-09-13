import React from "react";
import styles from './aboutSection.module.scss'


export default function AboutSection() {

    return (
        <div className={`container`}>
            <div className={`${styles.aboutSection}`}>
                <div className={`row align-items-center` }>
                    <div className={`col-md-6`}>
                        <div className={`${styles.content}`}>
                            <h2>Providing The Best Practices for Industry Security Protocols & Standardizing Procedures.</h2>
                            <p>In today’s digital and cloud-based world, your business performs only as well as your IT infrastructure. It empowers the users and runs the applications that run the business. A platform on which to build exceptional customer and employee experiences.</p>
                            <ul>
                                <li>Access control systems - Fire detection alarms</li>
                                <li>Access control systems - Fire detection alarms</li>
                                <li>Access control systems - Fire detection alarms</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-md-6 text-center`}>
                        <div className={`${styles.image}`}>
                            <div><img src={`../../images/about.png`} /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}