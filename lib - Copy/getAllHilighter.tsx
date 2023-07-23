export default async function getAllHilighter() {
    const res = await fetch('https://admin.agrilfoods.com/api/highlighter', { next: { revalidate: 60 } })
    if (!res.ok) Error(`Error! status: ${res.status}`);
    return res.json()
}