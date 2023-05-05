import ClothingList from "@components/ClothingList";
import Footer from "@components/Footer";
import FeedbackForm from "@components/MailingListForm";
import HomePageGallery from "@components/HomePageGallery"
import Head from "next/head";
import HomePageIntroSection from "@components/HomePageIntroSection";

import MailingListForm from "@components/MailingListForm";

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
        alignItems: 'center',
      }}>
        <HomePageGallery />
        <HomePageIntroSection />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'center',
          flexDirection: 'column',
          padding: '15px'
        }}>
          <MailingListForm/>

          <h3><Link href="/example-list">Example</Link></h3>
          <h3><Link href="/pricing">Pricing</Link></h3>
        </div>
      </div>
    </div>

  );
};
