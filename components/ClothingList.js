import recommendations from '../recommendations.json'
import ListMetadata from "@components/ListMetadata";
import styles from './ClothingList.module.css'


export default function ClothingList() {
  const metadata = {
    user: 'Jane Doe',
    profilePhoto: 'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5mbHVlbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title: 'My Favorite Clothing Recommendations',
    description: 'A collection of my favorite clothing items from various online stores. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    likes: 120,
    saves: 75,
  };

  return (
    <div className = {styles.container}>
      <ListMetadata {...metadata} />
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
    </div>
  );
};
