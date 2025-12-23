import React from 'react'
import styles from './aside.module.css'

import logo from './logo.png';
import Image from 'next/image';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            {/* <img src='/logo.png' alt='logo code connect'></img> */}
            <Image src={logo} alt='logo code connect'></Image>
        </aside>
    )
}

export default Aside