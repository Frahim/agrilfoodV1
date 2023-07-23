export default async function getEmployBySlug(slug: string) {
    const res = await fetch(`http://127.0.0.1:8000/api/employ/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error('Failed to load API');
    }
    return res.json();
  }