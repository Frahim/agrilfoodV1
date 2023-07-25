export default async function getAllProduct() {
    const res = await fetch('https://admin.agrilfoods.com/api/products', { next: { revalidate: 60 } }) 

    if(!res.ok) Error(`Error! status: ${res.status}`);
  return  res.json()
}


