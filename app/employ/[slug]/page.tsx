import React from 'react'
import getEmployBySlug from '@/lib/getEmploy'
import { Metadata } from 'next';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

import { GrPhone, GrWaypoint } from "react-icons/gr";

type Params = {
    params: {
        slug: string
    }
}

export const generateMetadata = async (props: Params): Promise<Metadata> => {
    const { params } = props
    const employ = await getEmployBySlug(params.slug)
    const title = employ.meta_title || employ.name;

    return {
        title,
        description: employ.meta_description,
    };
};

export default async function page({ params: { slug } }: Params) {
    const employ = await getEmployBySlug(slug)

    return (
        <>
         {/* @ts-expect-error Server Component */}
            <Navbar />
            <div className='titlesecSingle'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 employTitle'>
                            <h2>{employ.name}</h2>
                            <p> {employ.designeation}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-sm-12 col-md-4 left-sec'>
                        <Image src={`http://admin.agrilfoods.com/uploads/employ/${employ.picture}`} alt='Profile Picture' className="profilepic" width={600} height={400} />
                        <div className='infosec'>

                        </div>
                    </div>
                    <div className='col-sm-12 col-md-8 right-sec'>
                        <div className='mb-5 empbio'>
                            <h3>About {employ.name}:</h3>
                            <div dangerouslySetInnerHTML={{ __html: employ.bio }}></div>

                        </div>
                        <div className='contactinfo'>
                            <h3>Contact Information:</h3>
                            {employ.phonenumber && (
                                <p><Link className='singleancor' href={`tel:${employ.phonenumber}`}> <GrPhone /> {employ.phonenumber}</Link></p>
                            )}
                            {employ.mobile && (
                                <p><Link className='singleancor' href={`tel:${employ.mobile}`}> <GrPhone /> {employ.mobile}</Link></p>
                            )}
                            {employ.email && (
                                <p><Link className='singleancor' href={`mailto:${employ.email}`}><GrWaypoint /> {employ.email}</Link></p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
