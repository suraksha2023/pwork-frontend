import React from "react";
import styles from './productTwoAlternateSection.module.scss'

export default function ProductTwoAlternateSection({producttwoalternatesection}: any) {
    console.log('producttwoalternatesection:', producttwoalternatesection)

    return (
        <div className={`${styles.productTwoAlternateSection}`}>
            <div className={`container`}>
                <div className={`row mb-5 align-items-center justify-content-center`}>
                    <div className={`col-md-6`}>
                      <p>{producttwoalternatesection.sectionone[0].text}</p>
                    </div>
                    <div className={`col-md-6`}>
                        <img src={producttwoalternatesection.sectionone[0].image} />
                    </div>
                </div>
                <div className={`row align-items-center justify-content-center`}>
                    <div className={`col-md-6`}>
                        <img src={producttwoalternatesection.sectiontwo[0].image} />
                    </div>
                    <div className={`col-md-6`}>
                        <p>{producttwoalternatesection.sectiontwo[0].text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}