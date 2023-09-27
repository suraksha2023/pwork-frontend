import React from "react";
import styles from './aboutSection.module.scss'


export default function AboutSection({aboutsection}: any) {
    console.log('aboutsection:', aboutsection)

    return (
        <div className={`container`}>
            <div className={`${styles.aboutSection}`}>
                <div className={`row align-items-center` }>
                    <div className={`col-md-6`}>
                        <div className={`${styles.content}`}>
                            <h2>{aboutsection.title}</h2>
                            <p>{aboutsection.paragraph}</p>
                            <ul>
                                 {aboutsection.lists.map((element: any, index: any) => (
                                 <li className="nav-item" key={index}>{element.list}</li>))}
                            </ul>
                        </div>
                    </div>
                    <div className={`col-md-6 text-center`}>
                        <div className={`${styles.image}`}>
                            <div><img src={aboutsection.image} /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}