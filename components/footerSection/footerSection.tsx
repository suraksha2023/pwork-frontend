import React from "react";
import styles from './footerSection.module.scss'
import Link from "next/link";


export default function FooterSection({footersection}): any {
  console.log('footersection:',footersection)
    return (
        <div className={`${styles.footerSection}`}>
            <div className={`${styles.footerTop}`}>
                    <div className={`container`}>
                        <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <h3>{footersection.contact.introline}</h3>
                        </div>
                        <div className={`col-md-3`}>
                             <div className={`$styles.callToAction`}><button className={`btn btn-primary`}>{footersection.contact.button}</button></div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.callBtn}`}>
                                <div></div>
                                <div className={`d-flex justify-content-center align-items-center`}>
                                    <div className={`${styles.icon}`}>
                                        <img src={footersection.contact.image} />
                                    </div>
                                    <div>
                                        <p>{footersection.contact.paragraph}</p>
                                        <h4>{footersection.contact.title}</h4>
                                    </div>
                                </div>  

                            </div>
                        </div>
                    </div>
                    </div>
                 </div>
            <div className={`${styles.footerMiddle}`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-3`}>
                            <div>
                                <h3>{footersection.FooterTop[0].heading}</h3>
                                <ul>
                                    <li><Link href={`/`}>{footersection.FooterTop[0].menu[0].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[0].menu[1].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[0].menu[2].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[0].menu[3].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[0].menu[4].title}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div>
                                <h3>{footersection.FooterTop[1].heading}</h3>
                                <ul>
                                    <li><Link href={`/`}>{footersection.FooterTop[1].menu[0].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[1].menu[1].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[1].menu[2].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[1].menu[3].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[1].menu[4].title}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`row justify-content-end`}>
                                <div className={`col-md-5`}>
                                    <h3>{footersection.FooterTop[2].heading}</h3>
                                   <ul>
                                    <li><Link href={`/`}>{footersection.FooterTop[2].menu[0].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[2].menu[1].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[2].menu[2].title}</Link></li>
                                    <li><Link href={`/`}>{footersection.FooterTop[2].menu[3].title}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.footerBottom}`}>
                <div className={`container`}>
                    <div className={`row justify-content-between  align-items-center`}>
                        <div className={`col-9`}>
                            <ul className={`nav`}>
                                <li className={`nav-item`}><Link href={`/`}>{footersection.footerbottom[0].title}</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>{footersection.footerbottom[1].title}</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>{footersection.footerbottom[2].title}</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>{footersection.footerbottom[3].title}</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>{footersection.footerbottom[4].title}</Link></li>
                            </ul>
                        </div>
                        <div className={`col text-end`}>
                            <ul className={`nav ms-auto`}>
                                <li className={`nav-item`}><Link href={`/`}><img src={footersection.socialicons[0].logo} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={footersection.socialicons[1].logo} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={footersection.socialicons[2].logo} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={footersection.socialicons[3].logo} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={footersection.socialicons[4].logo} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}