export default async function getCategory() {
    const res = await fetch(`http://127.0.0.1:8000/api/category`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error('Failed to load category API');
    }
    return res.json();
}