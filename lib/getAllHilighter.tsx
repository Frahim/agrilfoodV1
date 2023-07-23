export default async function getAllHilighter() {
    const res = await fetch('http://127.0.0.1:8000/api/highlighter', { next: { revalidate: 60 } })
    if (!res.ok) Error(`Error! status: ${res.status}`);
    return res.json()
}