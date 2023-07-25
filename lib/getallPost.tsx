
export default  async function getallPost() {
    const res = await fetch('https://admin.agrilfoods.com/api/posts', { next: { revalidate: 60 } })   
    if(!res.ok) Error(`Error! status: ${res.status}`);
  return  res.json()
  }