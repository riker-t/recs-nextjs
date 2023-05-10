import styles from './ListHeader.module.css';
import ListToggle from './ListToggle';


export default function ListHeader({ photoUrl, listTitle, authorName, handleToggle }) {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.leftContainer}>
                <img src={photoUrl} alt="Profile" className={styles.image} />
                <div className={styles.listInfo}>
                    <h1 className={styles.listTitle}>{listTitle}</h1>
                    <p className={styles.author}>by {authorName}</p>
                </div>
            </div>
            <ListToggle onToggle={handleToggle}/>
        </div>
        
    );
};