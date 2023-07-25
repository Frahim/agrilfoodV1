export default async function getPostySlug(slug: string) {
    const res = await fetch(`https://admin.agrilfoods.com/api/posts/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    return res.json();
  }