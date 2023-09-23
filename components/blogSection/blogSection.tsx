import React from "react";
import styles from './blogSection.module.scss'


export default function BlogSection({blogsection}): any {
 console.log('blogsection', blogsection)
    return (
        <div>
            <div className={`${styles.blogSection}`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            <h2>{blogsection.Heading}</h2>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className={`col-md-4`}>
                            <div className={`${styles.blogCard}`}>
                                <div className={`${styles.image}`}>
                                    <img src={blogsection.title[0].image} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h5>{blogsection.title[0].date}</h5>
                                    <h3>{blogsection.title[0].title}</h3>
                                    <p>{blogsection.title[0].paragraph}</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.blogCard}`}>
                                <div className={`${styles.image}`}>
                                     <img src={blogsection.title[1].image} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h5>{blogsection.title[1].date}</h5>
                                    <h3>{blogsection.title[1].title}</h3>
                                    <p>{blogsection.title[1].paragraph}</p>
                                </div>
                            </div>

                        </div>
                        <div className={`col-md-4`}>
                            <div className={`${styles.blogCard}`}>
                                <div className={`${styles.image}`}>
                                     <img src={blogsection.title[2].image} />
                                </div>
                                <div className={`${styles.content}`}>
                                    <h5>{blogsection.title[2].date}</h5>
                                    <h3>{blogsection.title[2].title}</h3>
                                    <p>{blogsection.title[2].paragraph}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}