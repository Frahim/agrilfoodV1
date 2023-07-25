import Image from "next/image";
import getCategoryBySlug from '@/lib/getCategoryByslug';
import getAllProduct from '@/lib/getAllProduct';
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import type { Metadata } from 'next';
type Params = {
  params: {
    slug: string;
  };
};
interface Category {
  "id": number,
  "name": string,
  "slug": string,
  "description": string,
  "cat_image": string,
  "meta_title": string,
  "meta_keyword": string,
  "meta_description": string,
  "created_at": number,
  "updated_at": number, 
}
interface Product{
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
  "pf_image":string,
}
export const generateMetadata = async (props: Params): Promise<Metadata> => {
  const { params } = props;
  const cat = await getCategoryBySlug(params.slug);
  const title = cat.meta_title || cat.name;
  return {
    title,
    description: cat.meta_description,
  };
};

export default async function Category({ params: { slug } }: Params) {
  const catData: Promise<Category> = getCategoryBySlug(slug);
  const cat = await catData;
  const categoryId = cat.id;

  const productData: Promise<Product[]> = getAllProduct();
  const products = await productData;

  return (
    <>
     {/* @ts-expect-error Server Component */}
      <Navbar />
      <div className='wrapper sectionPadding'>
        <div className='container'>
          <div className='row justify-content-center products'>

            {products.map((product) => {
              const categoryString = product.category;
              const categories = categoryString.split(',').map((category) => category.trim());

              // Check if the current product's categories include the desired category ID
              if (categories.includes(categoryId.toString())) {
                return (
                  <div key={product.id} className="col-12 col-lg-4 col-xl-3 mb-3">
                    <Link href={`/product/${product.slug}`}>
                      <div className="card box_shadow1">
                        <div className="">
                          <Image
                            src={`https://admin.agrilfoods.com/${product.pf_image}`}
                            alt="image"
                            width={200}
                            height={200}
                          />
                          <div className="card-body text-center">
                            <h3 className="textDark mt-2">{product.name}</h3>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>

                );
              }
              return null; // If the product's categories don't match, return null to skip rendering
            })}
          </div>
        </div>
      </div>
    </>
  );
}
