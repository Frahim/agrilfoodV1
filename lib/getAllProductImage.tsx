
export default async function getAllProductImage() {
    const res = await fetch('https://admin.agrilfoods.com/api/product-image', { next: { revalidate: 60 } })   
    if(!res.ok) Error(`Error! status: ${res.status}`);
  return  res.json()

}
