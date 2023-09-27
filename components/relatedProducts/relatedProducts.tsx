import React from "react";
import styles from './relatedProducts.module.scss'

export default function RelatedProducts({relatedproducts}: any) {
    console.log('relatedproducts:', relatedproducts)

    return (
        <div className={`${styles.relatedProduct}`}>
            <div className={`container`}>
                <div className={`row mb-5 align-items-center justify-content-center`}>
                    <h2>{relatedproducts.title}</h2>
                </div>
                <div className={`row pb-4`}>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={relatedproducts.list[0].image} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                                <h2>{relatedproducts.list[0].title}</h2>
                                <p>{relatedproducts.list[0].text}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={relatedproducts.list[1].image} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                            <h2>{relatedproducts.list[1].title}</h2>
                                <p>{relatedproducts.list[1].text}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={relatedproducts.list[2].image} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                            <h2>{relatedproducts.list[2].title}</h2>
                                <p>{relatedproducts.list[2].text}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={relatedproducts.list[3].image} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                            <h2>{relatedproducts.list[3].title}</h2>
                                <p>{relatedproducts.list[3].text}</p>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-2`}>
                        <div className={`${styles.img}`}>
                            <img src={relatedproducts.list[4].image} />
                        </div>
                        <div>
                            <div className={`${styles.content}`}>
                            <h2>{relatedproducts.list[4].title}</h2>
                                <p>{relatedproducts.list[4].text}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}