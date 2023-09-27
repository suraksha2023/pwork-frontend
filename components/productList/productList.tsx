import React from "react";
import styles from './productList.module.scss'
import Filter from "../filter/filter";
import ProductContent from "../productContent/productContent";


export default function ProductList({productlist, filter}: any) {
    // console.log('productcontent:,', productcontent)
    return (
        <div className={`${styles.productContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-3`}>
                        <Filter filter={filter}/>
                    </div>
                        <div className={`col-md-9`}>
                            <ProductContent productcontent={productlist}/>
                        </div>
                </div>
            </div>

        </div>
    )
}