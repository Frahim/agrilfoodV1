
export default  async function getAllBrands() {
    const resbrand = await fetch('https://admin.agrilfoods.com/api/employ', { next: { revalidate: 60 } }) 
  
    if(!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
  return  resbrand.json()
  }