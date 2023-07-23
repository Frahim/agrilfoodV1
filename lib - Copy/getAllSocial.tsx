
export default  async function getAllSocial() {
    const resbrand = await fetch('http://127.0.0.1:8000/api/socialmedia', { next: { revalidate: 60 } }) 
  
    if(!resbrand.ok) Error(`Error! status: ${resbrand.status}`);
  return  resbrand.json()
  }