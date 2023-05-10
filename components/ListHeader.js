import styles from './ListHeader.module.css';
import ListToggle from './ListToggle';
import React from 'react';


// export default function ListHeader({ photoUrl, listTitle, authorName, handleToggle }, ref) {
//     return (

//         <div className={styles.headerContainer} ref={ref}>
//             <div className={styles.leftContainer}>
//                 <img src={photoUrl} alt="Profile" className={styles.image} />
//                 <div className={styles.listInfo}>
//                     <h1 className={styles.listTitle}>{listTitle}</h1>
//                     <p className={styles.author}>{authorName}</p>
//                 </div>
//             </div>
//             <ListToggle onToggle={handleToggle} />
//         </div>


//     );
// };

const ListHeader = React.forwardRef(({ photoUrl, listTitle, authorName, handleToggle }, ref) => {
    return (
      <div className={styles.headerContainer} ref={ref}>
        <div className={styles.leftContainer}>
          <img src={photoUrl} alt="Profile" className={styles.image} />
          <div className={styles.listInfo}>
            <h1 className={styles.listTitle}>{listTitle}</h1>
            <p className={styles.author}>by {authorName}</p>
          </div>
        </div>
        <ListToggle onToggle={handleToggle} />
      </div>
    );
  });
  
  export default ListHeader;