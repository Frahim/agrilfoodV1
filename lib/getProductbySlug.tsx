export default async function getBrandBySlug(slug: string) {
    const res = await fetch(`https://admin.agrilfoods.com/api/products/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    return res.json();
  }