import React from 'react'
import styles from "../styles/titleSection.module.css"

const TitleSection = ({ title, icon }) => {

    return (
        <div className={styles.container}>
            <div>
                {title}
            </div>
            <div>
                {icon}
            </div>
        </div>
    )
}

export default TitleSection