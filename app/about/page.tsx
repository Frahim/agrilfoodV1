import React from 'react';
import Navbar from '../../components/Navbar';
import type { Metadata } from 'next';
import getAllPages from '@/lib/getAllpages';
import Image from 'next/image';
import  Employ  from  '../../components/Employ'


export const metadata: Metadata = {
  title: 'About Agril Foods LID',
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
async function About() {
  const pages = await getAllPages()

  const pagebanner = (
    <>
      {pages.map((page: Page) => {
        if (page.slug === 'about-us') {
          return (
            <div key={page.id} className="header-slider">
              <div className="background-image">               
              <Image className="pagebanner" width={2000} src={`https://admin.agrilfoods.com/uploads/pages/${page.banner_image}`} alt='iamge' height="500" /> 
              <div className='overlayer'></div>
                <div className='bannertext'>
                  <h1>About Agril Foods LTD</h1>
                </div>
              </div>
            </div>
          )
        }
      })}
    </>
  )

  const welcomcontent = (
    <>
      {pagebanner}
      <div className='contentWrapper sectionPadding'>

        <div className='container'>
          <div className='row'>
            {pages.map((page: Page) => {
              if (page.slug === 'about-us') {
                return (
                  <div key={page.id} className='aboutWrapper'>
                      <div className='container'>
                        <div  className='bodycontent'>
                          <h2>Welcome to Agril Foolds LTD </h2>
                          <div className='contwrap'>
                          <div dangerouslySetInnerHTML={{ __html: page.page_content }}></div>
                          
                          </div>
                        </div>
                      </div>                   
                  </div>
                )
              }
            })}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
     {/* @ts-expect-error Server Component */}
      <Navbar />
      {welcomcontent}
       {/* @ts-expect-error Server Component */}
      <Employ />
    </>
  )
}

export default About