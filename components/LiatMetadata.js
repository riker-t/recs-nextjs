
import { FaHeart, FaBookmark } from 'react-icons/fa';


export default function ListMetadata({ user, profilePhoto, title, description, likes, saves }) {
    return (
        <div className="list-metadata">
            <div className="user-info">
                <img className="profile-photo" src={profilePhoto} alt={`${user}'s profile`} />
                <div className="username">{user}</div>
            </div>
            <h2 className="list-title">{title}</h2>
            <p className="list-description">{description}</p>
            <div className="list-stats">
                <span className="likes-count">
                    <FaHeart /> {likes}
                </span>
                <span className="saves-count">
                    <FaBookmark /> {saves}
                </span>
            </div>

            <style jsx>{`
            .list-metadata {
              border-bottom: 1px solid #ccc;
              margin-bottom: 20px;
              padding-bottom: 10px;
              padding: 0 10px;
              text-align: center;
            }
    
            .user-info {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 5px;
              font-size: 18px;
            }
    
            .profile-photo {
              border-radius: 50%;
              height: 100px;
              width: 100px;
              margin-bottom: 10px;
            }
    
            .list-title {
              font-size: 24px;
              margin: 5px 0;
            }
    
            .list-description {
              color: #666;
              font-size: 14px;
              margin-bottom: 10px;
            }
    
            .list-stats {
              color: #666;
              font-size: 14px;
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
            }
    
            .likes-count,
            .saves-count {
              margin-right: 10px;
              margin-bottom: 5px;
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

