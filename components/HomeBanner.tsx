"use client";
import React, { useEffect, useState } from 'react';
import styles from '../components/banner.module.css';
import { Istok_Web } from '@next/font/google';

const istok = Istok_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface BannerData {
  Vedio: string;
  description: string;
  other_description: string;
  short_description:string;
}

async function fetchBannerData(): Promise<BannerData> {
  const res = await fetch('https://admin.agrilfoods.com/api/brands/agril-foods-ltd');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

interface HomeBannerProps {
  banner: BannerData;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ banner }) => {
  return (
    <>
      <div className={styles.slider}>
        <div className={styles.borderAnimation}></div>
        <div className={styles.bannerWrap}>
          <div className={styles.backgroundVideo}>
            <video muted autoPlay loop className=''>
              <source src={banner.Vedio} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="container">
          <div className='row'>
            <div className="col-sm-12 col-md-8 mt-5">
              <div className={`${styles.bannerTitle} `}>
                <h1 className={`${istok.className}`}>{banner.short_description}</h1>
              </div>
              <div className="col-1-1 no-p ">
                <div className={`${styles.bannerDesc} fed`}>
                  <p className={istok.className}>{banner.other_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BannerHome() {
  const [bannerData, setBannerData] = useState<BannerData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBannerData();
        setBannerData(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  if (!bannerData) {
    // Render a loading state until the banner data is fetched
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Navbar and other content */}
      <HomeBanner banner={bannerData} />
      {/* Rest of the content */}
    </>
  );
}
