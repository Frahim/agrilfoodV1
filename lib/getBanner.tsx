
export default async function getBanner(id:string) {
    const res = await fetch(`http://127.0.0.1:8000/api/banner/${id}`, { next: { revalidate: 60 } })
    if(!res.ok) throw new Error('fail to load banner api')
  return res.json()
}
