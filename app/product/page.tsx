import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
// import Navbar from '../../components/Navbar';
 import HomeBanner from '@/components/HomeBanner';

import getAllProduct from '@/lib/getAllProduct';
import getAllProductImage from '@/lib/getAllProductImage';
interface Product{
    "id": number,
    "brand_id": number,
    "name": string,
    "slug": string,
    "type": string,
    "category": string,
    "description": string,
    "disease": string,
    "variety": string,
    "sorting": string,
    "pod": string,
    "plant": string,
    "orginal_price": number,
    "selling_price": number,
    "quantity": number,
    "meta_title": string,
    "meta_keyword": string,
    "meta_description": string,
    "created_at": number,
    "updated_at": number,
    "pf_image":string,
  }

export default async function page() {

    const products = await getAllProduct()

    const productinfo = (
        <>
            { 
            products.map((product: Product) => {
                return (
                    <div key={product.id} className='col-12 col-lg-4 col-xl-3 mb-3'>
                        <Link href={`product/${product.slug}`}>
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
            })
            }

        </>
    )
    return (
        <>
         {/* @ts-expect-error Server Component */}
         <Navbar />
         <HomeBanner/>
            <div className='sectionPadding bgFeather'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='mb-5'>All Products</h2>
                    </div>
                        <div className='col-12'>
                            <div className='row'>
                                {productinfo}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}

