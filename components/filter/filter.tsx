import React from "react";
import styles from './filter.module.scss'


export default function Filter({filter}: any) {
   console.log('filter', filter)
    return (
        <div>
            <div className={`${styles.filterSection}`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <h3>{filter.title}</h3>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {filter.labels[0].label}
                                </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[1].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[2].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[3].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[4].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[5].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[6].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.labels[7].label}
                            </label>
                        </div>

                        <h3 className={`pt-4`}>Brands</h3>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[0].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[1].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[2].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[3].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[4].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[5].label}
                            </label>
                        </div>
                        <div className="form-check pb-2">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                            {filter.brand.label[6].label}
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}