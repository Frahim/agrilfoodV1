export default async function getEmployBySlug(slug: string) {
    const res = await fetch(`http://admin.agrilfoods.com/api/employ/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    return res.json();
  }