
export default  async function getAllSocial() {
    const resbrand = await fetch('https://admin.agrilfoods.com/api/socialmedia', { next: { revalidate: 60 } }) 
  
    if(!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
  return  resbrand.json()
  }