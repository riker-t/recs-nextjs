import ClothingList from "@components/ClothingList";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import HomePageGallery from "@components/HomePageGallery"
import Head from "next/head";
import HomePageIntroSection from "@components/HomePageIntroSection";

import PricingTiers from "@components/PricingTiers";


import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Recs</title>
      </Head>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>

        <HomePageGallery />
        <HomePageIntroSection />
        <div style = {{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'column',
          padding: '15px'
        }}>
          <h3><Link href="/example-list">Example</Link></h3>
          <h3><Link href="/pricing">Pricing</Link></h3>
        </div>
      </div>
    </div>

  );
};
