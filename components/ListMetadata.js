
import { FaHeart, FaBookmark } from 'react-icons/fa';


export default function ListMetadata({ user, profilePhoto, title, description, likes, saves }) {
  return (
    <div className="list-metadata">
      <div className="user-info">
        <img className="profile-photo" src={profilePhoto} alt={`${user}'s profile`} />
        <p>{user}</p>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="list-stats">
        <span className="likes-count">
          <FaHeart /> <p>{likes}</p>
        </span>
        <span className="saves-count">
          <FaBookmark /> <p>{saves}</p>
        </span>
      </div>

      <style jsx>{`
            .list-metadata {
              border-bottom: 1px solid #ccc;
              margin-bottom: 10px;
              padding-bottom: 10px;
              padding: 5px;
              text-align: center;
            }
    
            .user-info {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 5px;
            }
    
            .profile-photo {
              border-radius: 50%;
              height: 100px;
              width: 100px;
              object-fit: cover;
            }
    

            .list-stats {
              display: flex;
              justify-content: center;
            }
    
            .likes-count,
            .saves-count {
              margin-right: 10px;
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 2px;
              gap: 2px;
            }
    
            @media (min-width: 768px) {
              .list-metadata {
                padding: 0 30px;
              }
            }
          `}</style>
    </div>
  );
};

