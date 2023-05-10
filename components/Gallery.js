import { useState } from "react";
import { useSwipeable } from 'react-swipeable';

import styles from "./Gallery.module.css";


export default function Gallery({ images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextImage(),
        onSwipedRight: () => prevImage(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className={styles.galleryView} {...swipeHandlers}>

            <div className={styles.galleryImageWrapper}>

                <img
                    src={images[currentImageIndex]}
                    className={styles.galleryImage}
                    alt={`Gallery image ${currentImageIndex + 1}`}
                />
            </div>

            <div className="gallery-controls">
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>
        </div>
    );
};