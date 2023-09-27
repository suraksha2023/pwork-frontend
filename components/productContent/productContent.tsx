import React from "react";
    import styles from './productContent.module.scss'


export default function ProductContent({productcontent}: any){
     console.log('productcontent:', productcontent)

    return (
        <div>
            <div className={`${styles.productContent}`}>
                <div className={`${styles.Top}`}>
                    <div className={`row`}>
                        <div className={`col-md-9`}>
                             <h4>{productcontent.title}<span>{productcontent.spantitle}</span></h4> 
                        </div>
                        <div className={`col-md-3 text-end`}>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Sorted by</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={`${styles.bottom}`}>
                    <div className={`row pb-4`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[0].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>  
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[1].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[2].image}/>
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[3].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row pb-4`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[4].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[5].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[7].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[6].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row pb-4`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[2].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[8].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[9].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[10].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row pb-4`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[11].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[0].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[1].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[2].image}/>
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`row pb-4`}>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[3].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[4].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[0].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.img}`}>
                                <img src={productcontent.list[1].image} />
                            </div>
                            <div>
                                <div className={`${styles.content}`}>
                                    <h2>HD Wi-Fi Home Camera</h2>
                                    <p>Rs. 1389</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}