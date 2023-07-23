import React from 'react'
import Navbar from '../../components/Navbar';
import { GrFormNext, GrFacebookOption, GrTwitter, GrInstagram, GrYoutube, GrPinterest, GrMap, GrPhone, GrMailOption } from "react-icons/gr";
import Link from 'next/link';
import getAllPages from '@/lib/getAllpages';

import type { Metadata } from 'next';


import Form from '../../components/contactForm'

export const metadata: Metadata = {
  title: 'Contact Agril Foods LID',
  description: 'Welcome to Agril Foods LID',
};

interface Page {
  "id": number,
  "name": string,
  "slug": string,
  "page_content": string,
  "page_other_content": string,
  "banner_image": string,
  "video_url": string,
  "meta_title": string,
  "meta_keyword": string,
  "meta_description": string,
  "created_at": number,
  "updated_at": number
}

async function Contact() {
  const pages = await getAllPages()


  const contactContent = (
    <>
      {pages.map((page: Page) => {
        if (page.slug === 'contact-us') {
          return (
            <div key={page.id} className="contact-content">
              <div dangerouslySetInnerHTML={{ __html: page.page_content }}></div>
            </div>
          )
        }
      })}
    </>
  )


  return (
    <>
     {/* @ts-expect-error Server Component */}
      <Navbar />
      <div  className='contactWrapper sectionPadding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 colsm-12'>
              {contactContent}
              <div className='contactInfo'>
                <div className='address'>
                  <GrMap /><span> House # 764-763/A, Avenue #06, Road #10,<br /> Mirpur DOHS, Dhaka</span>
                </div>
                <div className='mt-5 phone'>
                  <GrPhone /><span className='phone-wrap'>
                    <Link href='tel:+8801779898444'>+8801779898444</Link>,
                    <Link href='tel:+8801779898555'>+8801779898555</Link>,
                    <Link href='tel:+8801984800900'>+8801984800900</Link>,
                    <Link href='tel:+8801954541313'>+8801954541313</Link>,
                    <Link href='tel:02-51053841'>02-51053841</Link>,
                    <Link href='tel:02-51053842'>02-51053842</Link>,
                    <Link href='tel:02-51053843'>02-51053843</Link>

                  </span>
                </div>
                <div className='mt-5 eamil address'>
                  <GrMailOption />
                  <Link href='mailto:+8801779898444'>admin@agrilfoods.com</Link>
                </div>

              </div>
            </div>
            <div className='col-md-6 colsm-12'>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact