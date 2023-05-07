import recommendations from '../recommendations-mxc.json'
import styles from './GridView.module.css'




export default function GridView() {
    return (
    <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index} >
              <div>
                <div className={styles.clothingImageWrapper}>
                  <a href={recommendation.link} target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.clothingImage}
                      src={recommendation.imageUrl || `https://image.thum.io/get/${recommendation.link}`}
                      alt={recommendation.title}
                    />

                  </a>
                </div>
                <div className={styles.clothingName}>{recommendation.title}</div>
                <div className={styles.clothingDescription}>{recommendation.description}</div>
              </div>


            </li>
          ))}
        </ul>
    );
};
