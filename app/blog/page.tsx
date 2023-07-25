import React from 'react';
import Navbar from '../../components/Navbar';
import type { Metadata } from 'next';
import getallPost from '@/lib/getallPost';
import Image from 'next/image';
import Employ from '../../components/Employ'
import Link from 'next/link';
import Homebanner from '../../components/HomeBanner'

interface Post {
  "id": number,
  "title": string,
  "slug": string,
  "content": string,
  "featured_image": string,
  "seo_title": string,
  "seo_description": string,
  "created_at": number,
  "updated_at": number
}
export const metadata: Metadata = {
  title: 'Agril Foods Blog'
}

async function Blog() {
  const posts = await getallPost()


  const welcomcontent = (
    <>
    {/* @ts-expect-error Server Component */}
 <Navbar />      
      <div className='contentWrapper sectionPadding'>
        <div className='container'>
          <div className='row'>
            {posts.map((post: Post) => {
              <div key={post.id} className='col-12 col-lg-4 col-xl-3 mb-3'>
                <Link href={`blog/${post.slug}`}>
                  <div className="card box_shadow1">
                    <div className="">
                      <Image src={`https://admin.agrilfoods.com/${post.featured_image}`} alt='iamge' width="200" height="200" />
                      <div className="card-body text-center">
                        <h3 className="textDark mt-2"> {post.title}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
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
      <Homebanner/> 
      {welcomcontent}
      {/* @ts-expect-error Server Component */}
      <Employ />
    </>
  )
}

export default Blog