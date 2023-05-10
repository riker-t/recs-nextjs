import { useState } from "react";
import { useSwipeable } from 'react-swipeable';

import styles from "./Gallery.module.css";
import recommendations from '../recommendations-mxc.json'



export default function Gallery() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
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
            <div >

                <div className={styles.galleryImageWrapper}>

                    <a href={recommendations[currentImageIndex].link} target="_blank" rel="noopener noreferrer">


                        <img
                            // src={recommendations[currentImageIndex]}
                            src={recommendations[currentImageIndex].imageUrl || `https://image.thum.io/get/${recommendations[currentImageIndex].link}`}
                            className={styles.galleryImage}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                        />
                    </a>
                </div>
                <h3>{recommendations[currentImageIndex].title}</h3>
                <p>{recommendations[currentImageIndex].description}</p>
            </div>

            <div className="gallery-controls">
                <button onClick={prevImage}>Previous</button>
                <button onClick={nextImage}>Next</button>
            </div>
            <p></p>
        </div>
    );
};