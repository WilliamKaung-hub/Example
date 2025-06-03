"use client"

import styles from "./Example13.module.css";

export default function UserProfile() {
    return(
        <div>
            <h1 className={styles.h1}>User Profile</h1>
            <p className={styles.name}>Name : Mg Kaung Nyein Kyaw</p>
            <input className={styles.userInput}/>
        </div>

    );
    }
