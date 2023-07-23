import React from 'react';
import gtAllCategory from '@/lib/gtAllCategory';
import Link from 'next/link';
import HomeBanner from '../../components/HomeBanner';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Category',
    description: 'Welcome to Agril Foods LID',
};

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
export default async function CategoryProduct() {

    const cats = await gtAllCategory()
    const catinfo = (
        <>
         {/* @ts-expect-error Server Component */}
            <Navbar />
            <HomeBanner />
            <div className='contentWrapper sectionPadding'>
                <div className='container'>
                    <div className='col-md-12'>
                        <h2>All Categories</h2>
                    </div>
                    <div className='row sectionPadding'>
                        {cats.map((cat:Category) => {
                            return (
                                <div key={cat.id} className="col-12 col-lg-4 col-xl-3 mb-3">
                                    <Link href={`category/${cat.slug}`}>
                                        <div className="card box_shadow1">
                                            <div className="">
                                                <Image src={`http://admin.agrilfoods.com/uploads/category/${cat.cat_image}`} alt='iamge' width="200" height="200" />
                                                <div className="card-body text-center">
                                                    <h3 className="textDark mt-2"> {cat.name}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )

    return catinfo
}
