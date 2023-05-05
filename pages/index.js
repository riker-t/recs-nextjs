import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

import HomePageGallery from "@components/HomePageGallery";
import recommendations from '../recommendations.json'
import ListMetadata from "@components/LiatMetadata";

// export default function Home() {
//   return (
//     <div className="container">
//       {/* <Head>
//         <title>Recs</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head> */}
//       <HomePageGallery/>

//       <main>
//         <Header title="Recs" />
//         <hr />
//         <p className="description">
//           Here's an example of a Netlify Form Teddy! When you fill this out, the
//           submissions can be found in the Netlify Admin site.
//         </p>
//         <FeedbackForm />
//         <JokeBlock />
//       </main>
//       <Footer />
//     </div>
//   );
// }

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
    <div>
      <ListMetadata {...metadata} />
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <div className="clothing-item">
              <div className="clothing-image-wrapper">
                <a href={recommendation.link} target="_blank" rel="noopener noreferrer">
                  {/* <img className="clothing-image" src={recommendation.imageUrl} alt={recommendation.title} width="200" /> */}
                  <img
                    className="clothing-image"
                    src={recommendation.imageUrl || `https://image.thum.io/get/${recommendation.link}`}
                    alt={recommendation.title}
                    
                  />

                </a>
              </div>
              <div className="clothing-name">{recommendation.title}</div>
              <div className="clothing-description">{recommendation.description}</div>

              {/* ... remaining elements ... */}
            </div>


          </li>
        ))}
      </ul>
      <style jsx>{`
  /* ... existing styles ... */


  .visit-store-button:hover {
    background-color: #0051a2;
  }
  
  .clothing-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px; /* Add this line */

  }
  .clothing-description {
    font-size: 14px; /* Adjust this value as needed */
    margin-bottom: 10px; /* Add this line */
    color: #666; /* Adjust this value as needed */
  }

  li {
    // background-color: #f3f3f3;
    // border: 1px solid #ccc;
    // border-radius: 5px;
    // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 1px;
    width: 100%;
    max-width: 400px;
  }

  
  /* ... existing styles ... */

  .clothing-image-wrapper {
    position: relative;
    overflow: hidden;
    padding-top: 125%; /* Adjust this value for the desired aspect ratio */
    width: 100%; /* Add this line */
    margin-bottom: 15px; /* Increase this value if you need more spacing */

  }

  .clothing-image {
    position: absolute; /* Add this line */
    top: 0; /* Add this line */
    left: 0; /* Add this line */
    width: 100%; /* Add this line */
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }

  .clothing-image-wrapper:hover .clothing-image {
    transform: scale(1.1);
  }

  .clothing-image-wrapper::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .clothing-image-wrapper:hover::after {
    opacity: 1;
  }

  /* ... existing media queries ... */
`}</style>

    </div>
  );
};
