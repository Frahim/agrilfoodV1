
export default async function getBrand(id:string) {
    const res = await fetch(`https://admin.agrilfoods.com/api/brands/${id}`, { next: { revalidate: 60 } })
    if(!res.ok) throw new Error('fail to load api')
  return res.json()
}
