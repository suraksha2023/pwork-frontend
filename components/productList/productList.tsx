import React from "react";
import styles from './productList.module.scss'
import Filter from "../filter/filter";


export default function ProductList({productlist}): any{
    console.log('productlist', productlist)

    return (
        <div className={`${styles.productContainer}`}>
            <div className={`container`}>
                <div className={`row`}>
                    <div className={`col-md-3`}>
                         <div>
            <div className={`${styles.filterSection}`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <h3>{productlist.title}</h3>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {productlist.labels[0].label}
                                </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[1].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[2].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[3].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[4].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[5].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[6].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.labels[7].label}
                            </label>
                        </div>

                        <h3 className={`pt-4`}>{productlist.brand.title}</h3>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                               {productlist.brand.label[0].title}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                 {productlist.brand.label[1].title}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.brand.label[2].title}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {productlist.brand.label[3].title}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                 {productlist.brand.label[4].title}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                 {productlist.brand.label[5].title}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                 {productlist.brand.label[6].title}
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
                    </div>
                    <div className={`col-md-9`}>

                    </div>
                </div>
            </div>

        </div>
    )
}