
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from "next/image";
import Nave from "../../../components/Navbar";
import ProductBanner from "../component/banner";
import getProduct from "@/lib/getProduct";


import ProductCarosul from '../../../components/ProductCarosul'

type Params = {
  params: {
    slug: string
  }
}
interface Product {
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
  "pf_image": string,
  "product_images": Array<{
    "id": number,
    "product_id": string,
    "image": string,
    "created_at": string,
    "updated_at": string
  }>
}
async function Product({ params: { slug } }: Params) {
  

  const productData: Promise<Product> = getProduct(slug)
  const product = await productData

  return (
    <>
     {/* @ts-expect-error Server Component */}
      <Nave />
      <div className="wrapper sectionPadding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              

            <ProductCarosul params={{ slug: slug as string }} />


            </div>
            <div className="col-sm-12 col-md-6">
              <h1 className="productTitle">{product.type} test</h1>
              <h2 className="productType">{product.name}</h2>
              <p className="productTypeDescription">
                {product.description}
              </p>
              <h3 className="packageInstractionTitle">Disease Resistance Package</h3>
              <div className="packageInstraction">
                {product.disease}
                <p className="resistance">Intermediate Resistance:</p>
                {product.description}
              </div>
              <div className="productVaritionWrapper">
                <div className="tabilTitle">Variety</div>
                {product.variety}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Product;