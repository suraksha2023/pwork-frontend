import React from "react";
import styles from './filter.module.scss'


export default function Filter({filter}): any {
   console.log('filter', filter)
    return (
        <div>
            <div className={`${styles.filterSection}`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <h3>Categories</h3>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {filter.labels[0].label}
                                </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Bullet CCTV
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C-Mount CCTV
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                PTZ Pan-tilt CCTV
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Day/Night CCTV
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Infrared CCTV
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                IP CCTV
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Wireless CCTV
                            </label>
                        </div>

                        <h3 className={`pt-4`}>Brands</h3>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                LG
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Samsung
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                               CISCO
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                               Honywell
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                HK Vision
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                CP Plus
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Matrix
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}