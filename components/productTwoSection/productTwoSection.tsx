import React from "react";
import styles from './productTwoSection.module.scss'

export default function ProductTwoSection({producttwosection}: any) {
    console.log('producttwosection:', producttwosection)
    return (
        <div className={`${styles.productTwoSection}`}>
            <div className={`container`}>
                <div className={`row justify-content-center align-items-center`}>
                    <div className={`col-md-6`}>
                        <div className={`${styles.image}`}>
                            <img src={producttwosection.image} />
                        </div>

                    </div>
                    <div className={`col-md-6`}>
                        <div className={`${styles.content}`}>
                            <h2>{producttwosection.title}</h2>
                            <h5>{producttwosection.subtitle}</h5>
                            <p>{producttwosection.text}</p>
                                <div className="d-grid gap-4 d-md-block">
                                <button className="btn btn-primary me-3" type="button" >{producttwosection.buttonone}</button>
                                <button className="btn btn-primary" type="button">{producttwosection.buttontwo}</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}