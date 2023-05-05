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
            <h3>{recommendation.title}</h3>
            <p>Category: {recommendation.category}</p>
            <p>Recommended by: {recommendation.recommendedBy}</p>
            <img src={recommendation.imageUrl} alt={recommendation.title} width="200" />
            <button className="visit-store-button" onClick={() => window.open(website, '_blank')}>
              Visit Link
            </button>

          </li>
        ))}
      </ul>
      <style jsx>{`
  /* ... existing styles ... */

  .visit-store-button {
    background-color: #0070f3;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    margin-top: 10px;
    padding: 8px 15px;
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .visit-store-button:hover {
    background-color: #0051a2;
  }

  /* ... existing media queries ... */
`}</style>

    </div>
  );
};

export async function getServerSideProps() {
  // Replace this with a call to your actual API endpoint
  const recommendations = [
    {
      title: 'Stylish Jacket',
      category: 'Outerwear',
      recommendedBy: 'John Doe',
      imageUrl: 'https://example.com/images/jacket.jpg',
      link: 'https://example-store.com/jacket',
    },
    {
      title: 'Elegant Dress',
      category: 'Dresses',
      recommendedBy: 'Jane Doe',
      imageUrl: 'https://example.com/images/dress.jpg',
      link: 'https://example-store.com/dress',
    },
  ];

  return {
    props: {
      recommendations,
    },
  };
}
