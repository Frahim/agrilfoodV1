"use client";
import React from 'react';
import Image from 'next/image';
import getallEmploy from '@/lib/getallEmploy';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Homebanner from '../../components/HomeBanner';
interface Employ {
    "id": number,
    "name": string,
    "slug": string,
    "email": string,
    "phonenumber": string,
    "mobile": string,
    "bio": string,
    "designeation": string,
    "department": string,
    "picture": string,
    "brand_id": string,
    "created_at": string,
    "updated_at": string,
}
export default async function EmployPage() {
    const employ = await getallEmploy()

    const employprofile = (
        <> 
        <div className='sectionPadding epmmwinwrap'>
        <div className="container">
            <div className='row'>
                <div className='col-12'><h2 className='sectitle mb-5 text-center'>Our Team Members</h2></div>
                {employ.map((employ: Employ) => (
                    <div key={employ.id} className='col-sm-12 col-md-3'>
                        <div className='employWrap'>
                        
                            <div className='proimg'>
                            <Image src={`http://admin.agrilfoods.com/uploads/employ/${employ.picture}`} alt='Profile Picture' className="profilepic" width={300} height={300} />
                            </div>
                            
                            <div className='employ-sec text-center'>
                                <h2 className="empname">{employ.name}</h2>
                                <div className='biosec'> 
                                <p><strong>{employ.designeation}</strong></p>
                                <p>{employ.department} Department</p>
                               
                                </div>
                                <div className='buttonsec'>
                                    <Link className='btnlink' href={`tel:${employ.phonenumber}`}> Call</Link>
                                    <Link className='btnlink' href={`mailto:${employ.email}`}> mail</Link>
                                </div>
                            </div>
                            <Link className='mainlink' href={`/employ/${employ.slug}`}>  </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>

    )
  return (
    <div>
         {/* @ts-expect-error Server Component */}
        <Navbar />
        <Homebanner/> 
        {employprofile}
    </div>
  )
}
