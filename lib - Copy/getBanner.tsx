
export default async function getBanner(id:string) {
    const res = await fetch(`http://admin.agrilfoods.com/api/banner/${id}`, { next: { revalidate: 60 } })
    if(!res.ok) throw new Error('fail to load banner api')
  return res.json()
}
