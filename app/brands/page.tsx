import React from 'react'
import type { Metadata } from "next";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../components/banner.module.css';

import Navbar from '../../components/Navbar';

import { Mogra } from '@next/font/google';
import { Istok_Web } from '@next/font/google';
const istok = Istok_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const mogra = Mogra({ subsets: ['latin'], weight: ['400'] })
export const metadata: Metadata = {
    title: 'Brands'
}

import getAllBrands from '@/lib/getAllBrands';

interface Brand{
    "id": number,
    "name": string,
    "slug": string,
    "logo": string,
    "about_brand": string,
    "description": string,
    "short_description": string,
    "bandr_image": string,
    "Vedio": string,
    "other_description": string,
    "address": string,
    "housenumber": string,
    "postalcode": string,
    "city": string,
    "phonenumber": number,
    "mobile": number,
    "email": string,
    "category": string,
    "meta_title": string,
    "meta_keyword": string,
    "meta_description": string,
    "created_at": string,
    "updated_at": string
}


export default async function brandsPage() {
  
    const brands = await getAllBrands()
    const hmbanner = (
        <>
          {brands.map((brand: Brand) => {
            if (brand.slug === 'agril-foods-ltd') {
              return (
                <div key={brand.id} className={styles.slider}>
                  <div className={styles.borderAnimation}></div>
                  <div className={styles.bannerWrap}>
                    <div className={styles.backgroundVideo}>
                      <video muted autoPlay loop className=''>
                        <source src={brand.Vedio} type="video/mp4" />
                      </video>
                    </div>
                  </div>
    
                  <div className="container">
                    <div className='row'>
                      <div className="col-sm-12 col-md-8 mt-5">
                        <div className={`${styles.bannerTitle} `}>
                          <h1 className={`${istok.className}`}>{brand.short_description}</h1>
                        </div>
                        <div className="col-1-1 no-p ">
                          <div className={`${styles.bannerDesc} fed`}>
                            <p className={istok.className}>{brand.other_description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </>
      )

    const brandcontent = (
        <>
         {/* @ts-expect-error Server Component */}
            <Navbar />         
            {hmbanner}
            <div className='contentWrapper sectionPadding'>
                <div className='container'>
                    <div className='row'>
                        {brands.map((brand:Brand) => (                          
                                <div key={brand.id} className='col-sm-12 col-md-4 first_item sliderighr1' >
                                    <div className='wrapper-sec bg-white text-center'>
                                        <Link href={`/brands/${brand.slug}`}>
                                        <Image src={`https://admin.agrilfoods.com/uploads/brand/${brand.logo}`} alt='Brand Logo' className="mb-5" width={150} height={150} />
                                        <h2 className="mb-3 t-dark">{brand.name}</h2>
                                        <div className='content t-dark'>{brand.about_brand}</div>
                                        </Link>
                                    </div>
                                </div>                              
                           
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
    return brandcontent
}
