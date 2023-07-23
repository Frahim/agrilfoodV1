
export default async function getProduct(id:string) {
    const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`, { next: { revalidate: 60 } })
    if(!res.ok) throw new Error('fail to load api')
  return res.json()
}
