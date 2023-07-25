import React from "react";
import Navbar from '../components/Navbar';
import Link from 'next/link';
import styles from '../components/banner.module.css';
import Counting from "../components/counting";
import getAllBrands from "@/lib/getAllBrands";
import gtAllCategory from "@/lib/gtAllCategory";
import Image from 'next/image';
import { Istok_Web } from '@next/font/google';


const istok = Istok_Web({
  subsets: ['latin'],
  weight: ['400', '700'],
});


import { Mogra } from '@next/font/google';
const mogra = Mogra({ subsets: ['latin'], weight: ['400'] });

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Agril Foods LID',
  description: 'Agril Foods LID is a groop of company ',
}

type Params = {
  params: {
    slug: string;
  };
};

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
interface Category {
  "id": number,
  "name": string,
  "slug": string,
  "description": string,
  "cat_image": string,
  "meta_title": string,
  "meta_keyword": string,
  "meta_description": string,
  "created_at": number,
  "updated_at": number
}
export default async function Home({ params: { slug } }: Params) {

  const maxCategoriesToShow = 4;
  const cats = await gtAllCategory()
  const categoryId = cats.slug;
  const brands = await getAllBrands();

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
      {brands.map((brand: Brand) => (

        <div key={brand.id} className='row g-0 align mb-5'>
          <div className='col-sm-12 col-md-4 first_item sliderighr1' >
            <div className='wrapper-sec bg-white'>
              <Image className="mw-200 kingsLogo" width={200} src={`https://admin.agrilfoods.com/uploads/brand/${brand.logo}`} alt='iamge' height="100" />

              <h2 className={`${mogra.className} sisFirstTitle text-dark`}>{brand.name}</h2>

            </div>
          </div>
          <div className={`${brand.slug} col-sm-12 col-md-4 scond_item`}>
            <div className={` wrapper-sec   text-white`}>
              <h3 className=""> About {brand.name}</h3>
              <div className="content text-overflow-clamp">{brand.about_brand}</div>
            </div>
          </div>
          <div id="service" className='col-sm-12 col-md-4 third_item align-self-center slideLeft'>
            <div className='wrapper-sec bg-white'>
              <h3 className="">Product Category</h3>
              {/* Use slice() to limit the number of categories */}
              {brand.category.split(',').slice(0, maxCategoriesToShow).map((categoryId) => {
                const category = cats.find((cat: Category) => cat.id === parseInt(categoryId));

                if (category) {
                  return (
                    <Link key={category.id} href={`/category/${category.slug}`}>
                      <Image className="mw-200 catimg" width={80} height={80} src={`https://admin.agrilfoods.com/uploads/category/${category.cat_image}`} alt='Category Image' />
                      <span className="catname">{category.name}</span>
                    </Link>
                  );
                }

                return null;
              })}
            </div>
          </div>        
        </div>

      ))}
    </>
  )


  return (
    <>
     {/* @ts-expect-error Server Component */}
      <Navbar />
      {hmbanner}


      <div className='wrapper sectionPadding'>
        <div className='container'>
          {brandcontent}
        </div>
      </div>
      <Counting />
      <div className="sectionPadding">

      </div>

    </>
  )
}



