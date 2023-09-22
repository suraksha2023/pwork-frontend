import React from "react";
import styles from './slider.module.scss'


export default function Slider({slider}: any)  {
console.log('slider:', slider)
    return (
        <div>
            <div className={`${styles.slider}`}>
                <div className={`container`}>
                    <div className={`${styles.slide}`}>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-md-6`}>
                                <div className={`${styles.content}`}>
                                    <h2>{slider.banner[0].intro_line}</h2>
                                    <p>{slider.banner[0].paragraph}</p>
                                    <div className={`d-flex align-items-start`}>

                                        {slider.banner[0].button.map((element: any, index: any) => (
                                               <button className={`btn btn-primary`} key={index}>{element.button_text}</button>
                                                ))}

{/*
                                        <button className={`btn btn-primary`}></button>
                                        <button className={`btn btn-link`}></button>*/}
                                    </div>
                                </div>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={`${styles.image}`}>
                                    <img src={slider.banner[0].banner_image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}