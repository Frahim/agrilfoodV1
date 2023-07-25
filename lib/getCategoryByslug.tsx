export default async function getCategoryBySlug(slug: string) {
    const res = await fetch(`https://admin.agrilfoods.com/api/category/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
        throw new Error('Failed to load category API');
    }
    
    return res.json();
}