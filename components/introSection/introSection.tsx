import React from "react";
import styles from './introSection.module.scss'


export default function IntroSection({introsection}: any) {
  console.log('introsection:', introsection)
    return (
        <div className={`container`}>
            <div className={`${styles.introSection}`}>

                   

                <div className={`row justify-content-center align-items-center px-0`}>
                    <div className={`col-md-6 text-center`}>
                        <h1>{introsection.title}</h1>
                    </div>
                </div>

               <div className={`${styles.introBlock}`}>
                    <div className={`row`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={introsection.images[0].image} />
                            </div>
                            <h4>{introsection.images[0].image_text}</h4>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={introsection.images[1].image} />
                            </div>
                            <h4>{introsection.images[1].image_text}</h4>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={introsection.images[2].image} />
                            </div>
                            <h4>{introsection.images[2].image_text}</h4>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.proImage}`}>
                                <img src={introsection.images[3].image} />
                            </div>
                            <h4>{introsection.images[3].image_text}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}