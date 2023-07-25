
export default  async function getAllPages() {
    const res = await fetch('https://admin.agrilfoods.com/api/pages', { next: { revalidate: 60 } })   
    if(!res.ok) Error(`Error! status: ${res.status}`);
  return  res.json()
  }