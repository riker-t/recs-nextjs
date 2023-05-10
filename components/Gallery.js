import { useState } from "react";
import { Swipeable } from "react-swipeable";
import styles from "./Gallery.module.css";


export default function Gallery({ images }) {
    const [currentImage, setCurrentImage] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentImage((prevState) => (prevState + 1 < images.length ? prevState + 1 : prevState));
    };

    const handleSwipeRight = () => {
        setCurrentImage((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    };

    const swipeConfig = {
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    };

    return (
        <div className={styles.galleryView} >
            <p>Gallery</p>
            <Swipeable {...swipeConfig}>
                <img src={images[currentImage]} alt="gallery-item" className={styles.galleryImage} />
            </Swipeable>
        </div>
    );
};