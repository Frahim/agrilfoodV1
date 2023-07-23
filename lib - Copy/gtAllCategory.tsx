export default async function getCategory() {
    const res = await fetch(`http://admin.agrilfoods.com/api/category`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error('Failed to load category API');
    }
    return res.json();
}