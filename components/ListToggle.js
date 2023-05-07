// ListToggle.js
import React, { useState } from 'react';
import styles from './ListToggle.module.css';
import { FaTh, FaList } from 'react-icons/fa'; // Import the icons


export default function ListToggle({ onToggle }) {
    const [isGridView, setIsGridView] = useState(true);

    const handleToggle = () => {
        setIsGridView(!isGridView);
        onToggle(!isGridView);
    };

    return (
        <div className={styles.toggleContainer}>
            <button onClick={handleToggle} className={styles.toggleButton}>
                <div className={`${styles.iconBackground} ${isGridView ? styles.left : styles.right}`} />
                <FaTh className={`${styles.icon} ${isGridView ? styles.active : ''}`} />
                <FaList className={`${styles.icon} ${!isGridView ? styles.active : ''}`} />
            </button>
        </div>
    );
};

