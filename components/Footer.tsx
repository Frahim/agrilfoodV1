
import Footersvg from "../public/footer-bg.svg";
import Image from 'next/image';
import Link from 'next/link';
import { GrFormNext, GrFacebookOption, GrTwitter, GrInstagram, GrYoutube, GrPinterest, GrMap, GrPhone, GrMailOption } from "react-icons/gr";

import getAllSocial from '@/lib/getAllSocial'

interface SocialMediaItem {
    id: number;
    smname: string;
    smurl: string;
    socialicon:string;
    created_at: string;
    updated_at: string;
  }


export default async function Footer() {
  const socialMediaData = await  getAllSocial()
  return (
    <>
      <div className='section--has-background'>
        <div className='footer-wrapper sectionPadding'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-4 footerWidget footerOne'>
                <h3 className='widgetTitle t-white'>Quick link</h3>
                <ul className='footerNav'>
                  <li>
                    <GrFormNext /><Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <GrFormNext /><Link href="/brands">Our Brands</Link>
                  </li>

                  <li>
                    <GrFormNext /><Link href="/category">All Categories</Link>
                  </li>

                  <li>
                    <GrFormNext /><Link href="/product">All Products</Link>
                  </li>
                  <li>
                    <GrFormNext /><Link href="/employ">Our Family</Link>
                  </li>
                  <li>
                    <GrFormNext /><Link href="/contact">Contact Us</Link>
                  </li>

                </ul>
              </div>
              <div className='col-sm-12 col-md-4 footerWidget footerTwo'>
                <h3 className='widgetTitle t-white'>FOLLOW</h3>
                <ul className='socialmedia'>
                 
                  {socialMediaData.map((item:SocialMediaItem) => {
                    return (
                  <li key={item.id}>
                    <Link href={item.smurl} >                    
                    <Image src={`/uploads/socialicon/${item.socialicon}`} alt="Social Icon" width={40} height={40}/>
                    </Link>
                  </li>
                  )
                 })}
                 
                  {/* <li>
                    <Link href='/' ><GrTwitter /></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrInstagram /></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrYoutube /></Link>
                  </li>
                  <li>
                    <Link href='/' ><GrPinterest /></Link>
                  </li> */}

                </ul>
              </div>
              <div className='col-sm-12 col-md-4 footerWidget footerThree'>
                <h3 className='widgetTitle t-white'>CONTACT</h3>
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
          </div>
        </div>

      </div>
      <div className='copywright'>
        <div className='container'>

          <div className='copywrwp'>
            <p>©2023 Agril Foods LTD. all rights reserved</p>

            <span>|</span>
            <p>Digital transformation by <Link className='text-red' href='https://planb.com.bd'>Plan B</Link></p>


          </div>
        </div>
      </div>
    </>
  )
}
