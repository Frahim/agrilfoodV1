import React from 'react'
import Image  from 'next/image'
import getAllBrands from '@/lib/getAllBrands'


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


export default async function allbrands() {
 
    const brands = await  getAllBrands()

    const brandcontent = (
        <>
            {brands.data.map((brand: Brand) => (
                <div key={brand.id} className="container">
                <div className='row'>
                    <div key={brand.id} className='col-sm-12 col-md-4 first_item sliderighr1' >
                        <div className='wrapper-sec bg-white'>
                             <Image src={`http://admin.agrilfoods.com/${brand.logo}`} alt='Brand Logo' className="mw-200 kingsLogo" width={150} height={150} /> 
                            <h2 className="">{brand.name}</h2>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 scond_item '>
                        <div className='wrapper-sec bg-greensmoke  text-white'>
                            <h3  className=""> Agril Foods LTD</h3>

                        </div>
                    </div>
                    <div className='col-sm-12 col-md-4 third_item align-self-center slideLeft'>
                        {/* <div className='wrapper-sec bg-white'>
                            <h3 className={`${mogra.className}`}>Services</h3>
                            <Link className="hilited-link" href="/product">
                                <AiOutlineExport />  <span className="fs-14 text-dark "> Export Products</span> <GrFormNextLink className='nextpage-icon' />
                            </Link>
                            <Link className="hilited-link" href="/product">
                                <AiOutlineImport />  <span className="fs-14 text-dark "> Imported Products</span> <GrFormNextLink className='nextpage-icon' />
                            </Link>
                            <Link className="hilited-link" href="/product">
                                <AiOutlineHome />  <span className="fs-14 text-dark "> Home Made Products</span> <GrFormNextLink className='nextpage-icon' />
                            </Link>
                            <Link className="hilited-link" href="/product">
                                <AiOutlineShoppingCart />  <span className="fs-14 text-dark "> Online Seles</span> <GrFormNextLink className='nextpage-icon' />
                            </Link>
                            <Link className="mainlink-link" href="/agrilFoods">
                                <span className="fs-14 text-dark btn btn-success float-end text-white"> Learn More</span>
                            </Link>

                        </div> */}
                    </div>
                </div>
                </div>
            ))}
        </>
        
    )
    return brandcontent
}
