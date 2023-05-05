import '../styles/globals.css';


export default function ClothingList ({ recommendations }) {
  return (
    <div>
      <h1>Clothing Recommendations</h1>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>
            <h3>{recommendation.title}</h3>
            <p>Category: {recommendation.category}</p>
            <p>Recommended by: {recommendation.recommendedBy}</p>
            <img src={recommendation.imageUrl} alt={recommendation.title} width="200" />
            <p>
              <a href={recommendation.link} target="_blank" rel="noopener noreferrer">
                Visit Store
              </a>
            </p>
          </li>
        ))}
      </ul>
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

