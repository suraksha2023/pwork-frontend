import React from "react";
import styles from './slider.module.scss'


export default function Slider() {

    return (
        <div>
            <div className={`${styles.slider}`}>
                <div className={`container`}>
                    <div className={`${styles.slide}`}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-md-6`}>
                                <div className={`${styles.content}`}>
                                    <h2>Smart Security System for Morden World</h2>
                                    <p>Futureproofing your network infrastructure with an unrivalled service and support system.</p>
                                    <div className={`d-flex align-items-start`}>
                                        <button className={`btn btn-primary`}>Read More</button>
                                        <button className={`btn btn-link`}>Get Quote Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={`$styles.image`}>
                                    <img src={`../images/slider.png`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}