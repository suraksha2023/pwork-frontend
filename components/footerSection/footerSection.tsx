import React from "react";
import styles from './footerSection.module.scss'
import Link from "next/link";


export default function FooterSection() {

    return (
        <div className={`${styles.footerSection}`}>
            <div className={`${styles.footerTop}`}>
                    <div className={`container`}>
                        <div className={`row justify-content-center align-items-center`}>
                        <div className={`col-md-6`}>
                            <h3>Protect Your Home Or Business With Our Unique Solutions</h3>
                        </div>
                        <div className={`col-md-3`}>
                            <button className={`btn btn-primary`}>Discover More  Info</button>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={`${styles.callBtn}`}>
                                <div></div>
                                <div className={`d-flex justify-content-center align-items-center`}>
                                    <div className={`${styles.icon}`}>
                                        <img src={`../images/call.svg`} />
                                    </div>
                                    <div>
                                        <p>CALL US NOW</p>
                                        <h4>+91 98765 43210</h4>
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
                                <h3>Company</h3>
                                <ul>
                                    <li><Link href={`/`}>Company</Link></li>
                                    <li><Link href={`/`}>What we do?</Link></li>
                                    <li><Link href={`/`}>Who are we?</Link></li>
                                    <li><Link href={`/`}>Careers</Link></li>
                                    <li><Link href={`/`}>Vision & Mission</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div>
                                <h3>Our Products</h3>
                                <ul>
                                    <li><Link href={`/`}>Biometric System</Link></li>
                                    <li><Link href={`/`}>CCTV System Service</Link></li>
                                    <li><Link href={`/`}>Connectivity Solutions</Link></li>
                                    <li><Link href={`/`}>EPABX Solution</Link></li>
                                    <li><Link href={`/`}>Home Automation</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-6`}>
                            <div className={`row justify-content-end`}>
                                <div className={`col-md-5`}>
                                    <h3>Our Location</h3>
                                    <p>No. 839, First Floor, 9th Main,
                                        1st Block HRBR Layout,
                                        Kalyan Nagar, Bangalore,
                                        Karnataka, India – 560 043.</p>
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
                                <li className={`nav-item`}><Link href={`/`}>Contact</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>Privacy</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>Terms of use</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>Accessibility</Link></li>
                                <li className={`nav-item`}><Link href={`/`}>Cookie</Link></li>
                            </ul>
                        </div>
                        <div className={`col text-end`}>
                            <ul className={`nav ms-auto`}>
                                <li className={`nav-item`}><Link href={`/`}><img src={`../images/fb.svg`} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={`../images/instagram.svg`} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={`../images/youtube.svg`} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={`../images/twitter.svg`} /></Link></li>
                                <li className={`nav-item`}><Link href={`/`}><img src={`../images/linkedin.svg`} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}