import React from 'react';
import styles from './BottomNav.module.css';
import { FaHome, FaFolderOpen } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';


export default function BottomNav() {
    return (
        <>
            <div className={styles.container}> {/* Add this line */}

                <nav className={styles.bottomNav}>
                    {/* Add your navigation items here */}
                    <a href="/"><FaHome className={styles.icon} /></a>
                    <a href="/example-list"><FaFolderOpen className={styles.icon} /></a>
                    <a href="/pricing"><FaUser className={styles.icon} /></a>
                </nav>
            </div> {/* Add this line */}

        </>
    );
};

