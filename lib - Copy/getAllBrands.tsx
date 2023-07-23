
export default  async function getAllBrands() {
    const resbrand = await fetch('http://admin.agrilfoods.com/api/brands', { next: { revalidate: 60 } }) 
  
    if(!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
  return  resbrand.json()
  }