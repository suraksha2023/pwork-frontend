import React from "react";
import styles from './mainNav.module.scss'
import Link from 'next/link';

export default function MainNav({mainnav}: any) {
    console.log('MAINqq==', mainnav);
    return (
        <div>
            <div className={`$styles.mainNav pt-3 pb-3`}>
                <div className={`container`}>
                    <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-2`}>
                            <div className={`$styles.logo`}><img src={mainnav.logo} /> </div>
                        </div>
                        <div className={`col`}>
                            <div className={`nav navbar justify-content-center align-items-center`}>
                                <ul className="nav">
                                             
                                         {/* {mainnav.MenuList.map((element: any, index: any) => (
                                               <li className="nav-item" key={index}>{element.list}</li>
                                                ))} */}

                                         {mainnav.MenuList.map((element: any, index: any) => (
                                               <li className="nav-item" key={index}><Link className="nav-link active" href={`#`}>{element.list}</Link></li>
                                                ))}





                                   {/* <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Products</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Solutions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Pricing</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Partner</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Company</a>
                                    </li>
*/}
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-2`}>
                            <div className={`$styles.callToAction`}><button className={`btn btn-primary`}>{mainnav.button}</button></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
