"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import getProductbySlug from "@/lib/getProductbySlug";

interface ProductCarouselProps {
  params: {
    slug: string;
  };
}

interface ProductImage {
  id: number;
  product_id: string;
  image: string;
  created_at: string;
  updated_at: string;
}

interface Product {
  id: number;
  brand_id: number;
  name: string;
  slug: string;
  type: string;
  category: string;
  description: string;
  disease: string;
  variety: string;
  sorting: string;
  pod: string;
  plant: string;
  orginal_price: number;
  selling_price: number;
  quantity: number;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
  created_at: number;
  updated_at: number;
  pf_image: string;
  product_images: ProductImage[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductbySlug(params.slug);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const productGalleryImages = product.product_images.map((image) => ({
    original: `http://admin.agrilfoods.com/${image.image}`,
    thumbnail: `http://admin.agrilfoods.com/${image.image}`,
  }));

  // Custom function for rendering thumbs
  const renderThumbs = () => {
    return productGalleryImages.map((image, index) => (
      <div key={index} style={{ margin: "5px", cursor: "pointer" }}>
        <Image src={image.thumbnail} alt={`Thumbnail ${index}`} width={100} height={80} />
      </div>
    ));
  };

  return (
    <>
      <Carousel showThumbs={true} showStatus={true} renderThumbs={renderThumbs}>
       
        {productGalleryImages.map((image, index) => (
          <div key={index}>
            <Image src={image.original} alt={`Image ${index}`} width={700} height={500} />
          </div>
        ))}
      
      </Carousel>
    </>
  );
};

export default ProductCarousel;
