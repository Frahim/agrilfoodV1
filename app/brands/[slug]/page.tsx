import getBrandBySlug from "@/lib/getBrandBySlug";
import getAllProduct from '@/lib/getAllProduct';

import styles from "../../../components/banner.module.css";
import AgrilLogo from '../../../public/agrillogo_03.png';

import Image from "next/image";
import Link from "next/link";
import { GrPrevious } from 'react-icons/gr';
import { Istok_Web } from '@next/font/google';
import { Metadata } from 'next';
import { Product } from '../../../Product'

const istok = Istok_Web({
  subsets: ['latin'],
  weight: ['400', '700']
})


type Params = {
  params: {
    slug: string
  }
}
export const generateMetadata = async (props: Params): Promise<Metadata> => {
  const { params } = props
  const brand = await getBrandBySlug(params.slug)
  const title = brand.meta_title || brand.name;
  return {
    title,
    description: brand.meta_description,
  };
};

export default async function Brand({ params: { slug } }: Params) {

  const brand = await getBrandBySlug(slug);
  const products = await getAllProduct();

  return (
    <div id={brand.slug}>
      <div className='sisHwrapper'>
        <div className='agrilBack'>
          <Link className="backhomepage" href="/"><Image className="homelogo" width={100} alt="leeerob" src={AgrilLogo} /> </Link>
          <Link className="backhomepage" href="/"><span className='homebtn'><GrPrevious /> Back to Agril</span></Link>
        </div>

      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
        <div className="container">
          <Link className="navbar-brand mw-200" href="/">
            <Image src={`https://admin.agrilfoods.com/uploads/brand/${brand.logo}`} className="navlogo" width={200} height={80} alt="Brand Logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">

            <ul className="navbar-nav mr-0  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Brands
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" href="/brands/agril-foods-ltd">Agril Foods</Link></li>
                  <li><Link className="dropdown-item" href="/brands/king-feeds-ltd">Kink Feeds</Link></li>
                  <li><Link className="dropdown-item" href="/brands/gorgica-bd-ltd">Georgica BD</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="banner">
        <div className={styles.slider}>
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
              <div className="col-sm-12 col-md-8 mt-5 fadeUp">
                <div className={`${styles.bannerTitle} `} >
                  <h1 className={`${istok.className}`}>{brand.name}</h1>
                </div>
                <div className="col-1-1 no-p ">
                  <div className={`${styles.bannerDesc} fed`}>
                    <p className={istok.className}>  {brand.short_description}</p>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='bg-whitesmoke bg-sec-color sectionPadding text-center'>
        <div className='container'>
          <div className='row'>
            <h2 className="mb-3 fs-40">About {brand.name}</h2>
            <div className='row justify-content-md-center'>
              <div className="content-wrap col-md-9 col-sm-12">
                {brand.about_brand}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='ourpeoplr  sectionPadding' >
        <div className='container'>
          <div className='row'>

            <div className='title-wrwpper col-12 text-center'>

              <h2 className='mb-3 fs-40'>About Our People</h2>
              <div className='row justify-content-md-center'>
                <div className="content-wrap col-md-9 col-sm-12">
                  {brand.description}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='product-sec bg-whitesmoke sectionPadding'>
        <div className='container'>
          <div className='row'>
            <div id="ctegory" className='title-wrwpper col-12 text-center mb-5'>
              <h2 className='mb-3 fs-40 '>Our Products</h2>
              <div className='row justify-content-md-center'>
              <div className="content-wrap col-md-9 col-sm-12">
              {brand.other_description}
              </div>
              </div>
            </div>
            <div className="products row">
              {products.map((product: Product) => {
                if (product.brand_id == brand.id) {
                  return (
                    <div key={product.id} className='col-12 col-lg-4 col-xl-3 mb-3'>
                      <Link href={`/product/${product.id}`}>
                        <div className="card box_shadow1">
                          <div className="">
                            <Image src={`https://admin.agrilfoods.com/${product.pf_image}`} alt='iamge' width="200" height="200" />
                            <div className="card-body text-center">
                              <h3 className="textDark mt-2"> {product.name}</h3>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                }
              })
              }

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
