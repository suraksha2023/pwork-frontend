import React from "react";
import styles from './productSingleSection.module.scss'


export default function ProductSingleSection({productsinglesection}: any) {
    console.log('productsinglesection:', productsinglesection)

    return (
        <div className={`${styles.productSingleSection}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-8 mx-auto`}>
                        <h2>{productsinglesection.title}</h2>
                        <p> {productsinglesection.text}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}