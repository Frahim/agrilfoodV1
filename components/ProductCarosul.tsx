"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import getProductbySlug from "@/lib/getProductbySlug";
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css";

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
    original: `https://admin.agrilfoods.com/${image.image}`,
    thumbnail: `https://admin.agrilfoods.com/${image.image}`,
  }));

  // Check if the image gallery is empty
  if (productGalleryImages.length === 0) {
    return (
      <>
        <ImageGallery items={[{ original: `https://admin.agrilfoods.com/${product.pf_image}` }]} />
      </>
    );
  }

  // If the image gallery is not empty, add the pf_image as the first slide
  const carouselImages = [
    { original: `https://admin.agrilfoods.com/${product.pf_image}` },
    ...productGalleryImages,
  ];

  return (
    <>
      <ImageGallery items={carouselImages} showThumbnails={true} showFullscreenButton={true} />
    </>
  );
};

export default ProductCarousel;
