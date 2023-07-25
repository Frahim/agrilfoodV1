
export default async function getProduct(id:string) {
    const res = await fetch(`https://admin.agrilfoods.com/api/products/${id}`, { next: { revalidate: 60 } })
    if(!res.ok) throw new Error('fail to load api')
  return res.json()
}
