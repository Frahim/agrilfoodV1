import React  from 'react';
import styles from '../../../components/banner.module.css';
import getAllBanners from '@/lib/getAllpages'
import { Istok_Web } from '@next/font/google';
const istok = Istok_Web({
    subsets: ['latin'],
    weight: ['400', '700']
})
type Params = {
    params: {
      slug: string,
      brandId:string,
    }
  }
  interface Brand {
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
import getBrandBySlug from "@/lib/getBrandBySlug"

export default async function ProductBanner({ params: { slug } }: Params) {
   
   
    const barndData: Promise<Brand> = getBrandBySlug(slug)
    const barnd = await barndData 
    return (
        <div className="banner">
          
        <div className={styles.slider}>
          <div className={styles.borderAnimation}></div>
          <div className={styles.bannerWrap}>
            <div className={styles.backgroundVideo}>
              <video muted autoPlay loop className=''>
                <source src={barnd.Vedio} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="container">
            <div className='row'>
              <div className="col-sm-12 col-md-8 mt-5 fadeUp">
                <div className={`${styles.bannerTitle} `} >
                  <h1 className={`${istok.className}`}>{barnd.name}</h1>
                </div>
                <div className="col-1-1 no-p ">
                  <div className={`${styles.bannerDesc} fed`}>
                    {barnd.short_description}

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}
